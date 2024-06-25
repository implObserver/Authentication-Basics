import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from "../../../../../models/user.js";
import bcrypt from 'bcryptjs';

const verifyCallback = async (username, password, done) => {
    try {
        console.log('try')

        const user = await User.findOne({ username: username });
        if (!user) {
            console.log('uncorrect username')
            return done(null, false, { message: "Incorrect username" });
        };

        const match = await bcrypt.compare(password, user.password);
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
}

const strategy = new LocalStrategy(verifyCallback);

export const useLocalStrategy = () => {
    passport.use(strategy);
}
