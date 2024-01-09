import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ILeaderboard from '../Interfaces/leaderboard/ILeaderboard';
import TeamModel from '../models/TeamModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import MatchModel from '../models/MatchModel';
import HomeTable from '../utils/HomeTable';
import AwayTable from '../utils/AwayTable';
import SortTable from '../utils/SortTable';
import CombineTables from '../utils/CombineTables';

export default class LeaderboardService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
    private matchModel: IMatchModel = new MatchModel(),
  ) { }

  public async homeLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const teams = await this.teamModel.findAll();
    const finishedMatches = await this.matchModel.findInProgress(false);

    const lb = HomeTable(teams, finishedMatches);

    const sortedLb = SortTable(lb);
    return { status: 'SUCCESSFUL', data: sortedLb };
  }

  public async awayLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const teams = await this.teamModel.findAll();
    const finishedMatches = await this.matchModel.findInProgress(false);

    const lb = AwayTable(teams, finishedMatches);

    const sortedLb = SortTable(lb);
    return { status: 'SUCCESSFUL', data: sortedLb };
  }

  public async getLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const teams = await this.teamModel.findAll();
    const finishedMatches = await this.matchModel.findInProgress(false);

    const homeLb = HomeTable(teams, finishedMatches);
    const awayLb = AwayTable(teams, finishedMatches);

    const lb = CombineTables(homeLb, awayLb);

    const sortedLb = SortTable(lb);
    return { status: 'SUCCESSFUL', data: sortedLb };
  }
}
