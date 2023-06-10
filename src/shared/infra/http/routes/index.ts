import { Router } from 'express';

import { clientRoutes } from './client.routes';
import { productRoutes } from './product.routes';

const router = Router();

router.use("/client", clientRoutes);
router.use("/product", productRoutes);

export { router };