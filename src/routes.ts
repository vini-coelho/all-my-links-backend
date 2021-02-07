import { Router } from 'express';
import UserController from './app/controllers/UserController';
import LinkController from './app/controllers/LinkController';

const router = Router();

router.get('/users', UserController.index);
router.get('/users/user/:username', UserController.showByUsername);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);

router.get('/:user_id/links', LinkController.index);
router.get('/:user_id/links/:id', LinkController.show);
router.post('/:user_id/links', LinkController.store);
router.put('/:user_id/links/:id', LinkController.update);
router.delete('/:user_id/links/:id', LinkController.destroy);

export default router;
