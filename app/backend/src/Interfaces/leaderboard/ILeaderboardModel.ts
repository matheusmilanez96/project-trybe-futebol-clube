import ILeaderboard from './ILeaderboard';

export interface ILeaderboardModel {
  homeLeaderboard(): Promise<ILeaderboard[]>,
}
