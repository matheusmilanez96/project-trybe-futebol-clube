import { Router } from 'express';
import teamsRouter from './team.routes';

const router = Router();

router.use('/teams', teamsRouter);

export default router;
