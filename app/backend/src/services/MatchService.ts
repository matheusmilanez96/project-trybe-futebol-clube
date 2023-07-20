import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import IMatch from '../Interfaces/matches/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchModel from '../models/MatchModel';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) { }

  public async getAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.matchModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getFilteredMatches(inProgress: boolean): Promise<ServiceResponse<IMatch[]>> {
    console.log('service', inProgress);
    const filteredMatches = await this.matchModel.findInProgress(inProgress);
    return { status: 'SUCCESSFUL', data: filteredMatches };
  }
}
