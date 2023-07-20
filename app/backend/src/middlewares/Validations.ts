import { NextFunction, Request, Response } from 'express';
import Email from '../utils/Email';
import jwtUtil from '../utils/jwt.util';

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

  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
      }
      const data = authorization.split(' ');
      const token = data[data.length - 1];
      const payload = jwtUtil.verify(token);
      res.locals.user = payload;
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}

export default Validations;
