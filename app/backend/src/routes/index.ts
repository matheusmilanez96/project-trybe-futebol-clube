import { Router } from 'express';
import teamsRouter from './team.routes';
import authRouter from './auth.routes';
import Validations from '../middlewares/Validations';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', Validations.validateLogin, authRouter);

export default router;
