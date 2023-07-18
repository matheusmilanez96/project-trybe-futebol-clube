import { Request, Router, Response } from 'express';
import AuthController from '../controllers/AuthController';
import Validations from '../middlewares/Validations';

const authController = new AuthController();

const router = Router();

router.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => authController.getUserByEmail(req, res),
);

export default router;
