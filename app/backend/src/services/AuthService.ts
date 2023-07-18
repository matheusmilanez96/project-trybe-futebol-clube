import bcrypt = require('bcryptjs');
import jwtUtil from '../utils/jwt.util';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

export default class AuthService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async getUserByEmail(login: Login): Promise<ServiceResponse<Token>> {
    const foundUser = await this.userModel.findOne(login.email);

    if (!foundUser || !bcrypt.compareSync(login.password, foundUser.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const { id, email } = foundUser;

    const token = jwtUtil.sign({ id, email });

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
