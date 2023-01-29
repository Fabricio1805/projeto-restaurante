import { Router } from 'express';
import routerCategory from './category.routes';
import routerOrder from './order.routes';
import routerProduct from './product.routes';
import routerUser from './user.routes';

const router = Router();

//router.use('/users', routerUser);
router.use('/product', routerProduct);

router.use('/category', routerCategory);

router.use('/order', routerOrder);

export default router;
