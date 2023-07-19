import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class AuthController {
  constructor(
    private authService = new AuthService(),
  ) { }

  public async getUserByEmail(req: Request, res: Response) {
    const serviceResponse = await this.authService.getUserByEmail(req.body);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  getRole = async (_req: Request, res: Response) => {
    const { email } = res.locals.user;
    const serviceResponse = await this.authService.getRoleByEmail(email);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  };
}
