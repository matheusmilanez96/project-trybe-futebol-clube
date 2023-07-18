import { Request, Router, Response } from 'express';
import AuthController from '../controllers/AuthController';

const authController = new AuthController();

const router = Router();

router.post('/', (req: Request, res: Response) => authController.getUserByEmail(req, res));

export default router;
