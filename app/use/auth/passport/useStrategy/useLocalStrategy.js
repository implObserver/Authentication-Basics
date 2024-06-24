import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from "../../../../../models/user.js";
import bcrypt from 'bcryptjs';

export const useLocalStrategy = () => {
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                console.log('try')
                const user = await User.findOne({ username: username });
                const match = await bcrypt.compare(password, user.password);
                if (!user) {
                    console.log('uncorrect username')
                    return done(null, false, { message: "Incorrect username" });
                };
                if (!match) {
                    console.log('Incorrect password')
                    return done(null, false, { message: "Incorrect password" });
                };
                console.log('Welcome')
                return done(null, user);
            } catch (err) {
                console.log('catch')
                return done(err);
            };
        })
    );
}
