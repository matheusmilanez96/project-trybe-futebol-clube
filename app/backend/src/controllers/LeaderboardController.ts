import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) { }

  public async homeLeaderboard(_req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.homeLeaderboard();
    res.status(200).json(serviceResponse.data);
  }

  public async awayLeaderboard(_req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.awayLeaderboard();
    res.status(200).json(serviceResponse.data);
  }

  public async getLeaderboard(_req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getLeaderboard();
    res.status(200).json(serviceResponse.data);
  }
}
