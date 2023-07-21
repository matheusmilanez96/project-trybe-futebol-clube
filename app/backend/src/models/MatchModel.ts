import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';
import IMatch from '../Interfaces/matches/IMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return dbData;
  }

  async findInProgress(inProgress: boolean): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return dbData;
  }

  async finishMatch(id: IMatch['id']): Promise<boolean | null> {
    const match = await this.model.findByPk(id);
    if (match == null) return null;
    await match.update({ inProgress: false });
    return true;
  }

  async updateMatch(
    homeTeamGoals: IMatch['homeTeamGoals'],
    awayTeamGoals: IMatch['awayTeamGoals'],
    id: IMatch['id'],
  ): Promise<boolean | null> {
    const match = await this.model.findByPk(id);
    if (match == null) return null;
    await match.update({ homeTeamGoals, awayTeamGoals });
    return true;
  }
}
