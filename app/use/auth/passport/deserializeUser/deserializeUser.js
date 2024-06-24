import passport from "passport";
import { User } from '../../../../../models/user.js';

export const setDeserializeUser = () => {
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        };
    });
}