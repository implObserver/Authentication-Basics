import session from "express-session";
import { app } from "../../../app.js";

export const useSession = () => {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }));
}