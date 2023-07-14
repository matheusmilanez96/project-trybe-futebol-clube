import { App } from './app';

const PORT = process.env.APP_PORT || 3001;
// primeiro commit
new App().start(PORT);
