import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import IMatch from '../Interfaces/matches/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchModel from '../models/MatchModel';
import { Message } from '../types/Message';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
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
    console.log(id);
    const modelResponse = await this.matchModel.finishMatch(id);
    if (!modelResponse) {
      return { status: 'NOT_FOUND', data: { message: `Match ${id} not found` } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }
}
