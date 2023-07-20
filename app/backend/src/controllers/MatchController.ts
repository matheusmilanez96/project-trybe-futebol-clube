import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    console.log('controller', inProgress);
    if (!inProgress) {
      console.log('if', inProgress);
      const serviceResponse = await this.matchService.getAllMatches();
      return res.status(200).json(serviceResponse.data);
    }
    const isInProgress = inProgress === 'true';
    const serviceResponse = await this.matchService.getFilteredMatches(isInProgress);
    res.status(200).json(serviceResponse.data);
  }
}
