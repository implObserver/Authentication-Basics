import { static as staticFile } from 'express';
import { join } from 'path';
import { __dirname } from '../../../../dirname/dirname.js';
import { app } from '../../../../app.js';

export const useStaticFileServe = () => {
    app.use(staticFile(join(__dirname, 'public')));
}