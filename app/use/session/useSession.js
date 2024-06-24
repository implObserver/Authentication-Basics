import { app } from '../../app.js';
import session from "express-session";

export const useSession = () => {
    app.use(session({
        secret: "cats",
        resave: false,
        saveUninitialized: true
    }));
}