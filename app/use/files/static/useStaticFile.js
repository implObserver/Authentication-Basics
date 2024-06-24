import { static as staticFile } from 'express';
import { join } from 'path';
import { app } from '../../../app.js';
import { __dirname } from '../../../dirname/dirname.js';

export const useStaticFileServe = () => {
    app.use(staticFile(join(__dirname, 'public')));
}