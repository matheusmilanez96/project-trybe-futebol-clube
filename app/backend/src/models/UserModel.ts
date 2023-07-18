import SequelizeUser from '../database/models/SequelizeUser';
import IUser from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findOne(email: IUser['email']): Promise<IUser | null> {
    const dbData = await this.model.findOne({ where: { email } });

    if (dbData == null) return null;
    const { id, username, role, password }: IUser = dbData;
    return { id, username, role, email, password };
  }
}
