import IUser from './IUser';

export interface IUserModel {
  findOne(email: IUser['email']): Promise<IUser | null>,
}
