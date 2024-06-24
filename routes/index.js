import { Router } from 'express';
import { indexController } from '../controllers/indexController.js';

export const indexRouter = Router();

/* GET home page. */
indexRouter.get('/', indexController.index_default_get);