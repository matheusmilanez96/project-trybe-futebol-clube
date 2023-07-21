import { NewEntity } from '../Interfaces';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import IMatch from '../Interfaces/matches/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchModel from '../models/MatchModel';
import { Message } from '../types/Message';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) { }

  public async getAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.matchModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getFilteredMatches(inProgress: boolean): Promise<ServiceResponse<IMatch[]>> {
    const filteredMatches = await this.matchModel.findInProgress(inProgress);
    return { status: 'SUCCESSFUL', data: filteredMatches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<Message>> {
    const modelResponse = await this.matchModel.finishMatch(id);
    if (!modelResponse) {
      return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updateMatch(homeTeamGoals: number, awayTeamGoals: number, id: number):
  Promise<ServiceResponse<Message>> {
    console.log(homeTeamGoals, awayTeamGoals);
    const modelResponse = await this.matchModel.updateMatch(homeTeamGoals, awayTeamGoals, id);
    if (!modelResponse) {
      return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Match updated' } };
  }

  public async addNewMatch(match: NewEntity<IMatch>): Promise<ServiceResponse<IMatch>> {
    const { homeTeamId, awayTeamId } = match;
    if (homeTeamId === awayTeamId) {
      return { status: 'UNPROCESSABLE CONTENT',
        data: { message: 'It is not possible to create a match with two equal teams' } };
    }
    const homeTeam = await this.teamModel.findById(homeTeamId);
    const awayTeam = await this.teamModel.findById(awayTeamId);
    if (!homeTeam || !awayTeam) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }
    const modelResponse = await this.matchModel.addNewMatch(match);

    return { status: 'CREATED', data: modelResponse };
  }
}
