import cors from 'cors'
import { app } from '../../../../app.js'

export const useCORS = () => {
    app.use(cors());
}