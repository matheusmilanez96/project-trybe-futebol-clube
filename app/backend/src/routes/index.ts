import { Router } from 'express';
import teamsRouter from './team.routes';
import authRouter from './auth.routes';
import matchesRouter from './match.routes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', authRouter);
router.use('/matches', matchesRouter);

export default router;
