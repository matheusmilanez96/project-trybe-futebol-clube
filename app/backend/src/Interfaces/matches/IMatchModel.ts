import { NewEntity } from '..';
import IMatch from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  findInProgress(inProgress: boolean): Promise<IMatch[]>,
  finishMatch(id: number): Promise<boolean | null>,
  updateMatch(homeTeamGoals: number, awayTeamGoals: number, id: number): Promise<boolean | null>,
  addNewMatch(match: NewEntity<IMatch>): Promise<IMatch>,
}
