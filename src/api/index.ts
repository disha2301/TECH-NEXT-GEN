import { Router } from 'express';
import { getUsers, registerUser, verifiedUser } from './controller';
import { validateUser, verifyUser } from './middleware';

export default (): Router => {
  const app = Router();
  app.post('/register', validateUser, registerUser);
  app.patch('/attend', verifyUser, verifiedUser);
  app.get('/users', getUsers);

  //TODO: add routes here...

  return app;
};
