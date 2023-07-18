import { NextFunction, Request, Response } from 'express';
import Email from '../utils/Email';

class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body as { email: string, password: string };
    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields must be filled',
      });
    }
    if (!Email.validate(email) || password.length < 6) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }
    next();
  }
}

export default Validations;
