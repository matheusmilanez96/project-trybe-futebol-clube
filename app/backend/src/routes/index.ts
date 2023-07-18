import { Router } from 'express';
import teamsRouter from './team.routes';
import authRouter from './auth.routes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', authRouter);

export default router;
