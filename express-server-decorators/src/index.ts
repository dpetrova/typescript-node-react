import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';

// route controllers
import './controllers/LoginController';
import './controllers/RootController';

// create app
const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['verysecretword'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
