import { Router } from 'express';
import { userController } from '../controllers/userController.js';
const router = Router();

/* GET home page. */
router.get('/', userController.user_auth_get);
router.post('/log-in', userController.user_auth_post);
router.get('/log-out', userController.user_logout_get);

export default router;