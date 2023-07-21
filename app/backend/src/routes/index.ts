import { Router } from 'express';
import teamsRouter from './team.routes';
import authRouter from './auth.routes';
import matchesRouter from './match.routes';
import leaderboardRouter from './leaderboard.routes';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', authRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
