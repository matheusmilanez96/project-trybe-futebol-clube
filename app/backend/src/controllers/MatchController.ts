import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (!inProgress) {
      const serviceResponse = await this.matchService.getAllMatches();
      return res.status(200).json(serviceResponse.data);
    }
    const isInProgress = inProgress === 'true';
    const serviceResponse = await this.matchService.getFilteredMatches(isInProgress);
    res.status(200).json(serviceResponse.data);
  }

  public async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.matchService.finishMatch(Number(id));
    res.status(200).json(serviceResponse.data);
  }

  public async updateMatch(req: Request, res: Response) {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    const serviceResponse = await this.matchService
      .updateMatch(Number(homeTeamGoals), Number(awayTeamGoals), Number(id));
    res.status(200).json(serviceResponse.data);
  }

  public async addNewMatch(req: Request, res: Response) {
    const serviceResponse = await this.matchService.addNewMatch(req.body);
    if (serviceResponse.status !== 'CREATED') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(201).json(serviceResponse.data);
  }
}
