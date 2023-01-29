import { Router } from 'express';
import createUser from '../app/useCases/users/createUser';

const routerUser = Router();

routerUser.post('/', createUser);

export default routerUser;
