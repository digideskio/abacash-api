import express from 'express';
import * as controller from '../controllers/system-role.controller';

const router = express.Router();

router.post('/:id', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

export default router;