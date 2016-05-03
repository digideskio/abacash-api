import express from 'express';
import * as controller from '../controllers/customer-role.controller';
import { createAuthMiddleware } from '../auth';
import { ADMINISTRATOR } from '../auth/constants';

const router = express.Router();

router.use(createAuthMiddleware(ADMINISTRATOR));
router.get('/', controller.list);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

export default router;
