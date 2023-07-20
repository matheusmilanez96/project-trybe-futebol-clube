import IMatch from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>,
  findInProgress(inProgress: boolean): Promise<IMatch[]>,
}
