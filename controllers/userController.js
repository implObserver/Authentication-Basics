import { User } from "../models/user.js";
import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import passport from "passport";
import bcrypt from 'bcryptjs';
import { issueJWT } from "../app/use/dev/auth/token/JWT/issueJWT.js";

const user_create_get = (req, res, next) => {
    res.render("sign-up-form");
};

const user_create_post = [
    // Validate and sanitize fields.
    body("username")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Name must be specified."),
    body("password")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Password must be specified."),

    // Process request after validation and sanitization.
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        // Create Author object with escaped and trimmed data
        const user = new User({
            username: req.body.username,
            password: hashPassword,
        });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render("sign-up-form", {
                user: user,
                errors: errors.array(),
            });
            return;
        } else {
            // Data from form is valid.
            const jwt = issueJWT(user);
            // Save author.
            await user.save();
            // Redirect to new author record.
            res.json({ token: jwt.token });
        }
    }),
];

const user_auth_get = (req, res, next) => {
    res.render("log-in-form", { user: req.user });
};

const user_auth_jwt_protected = async (req, res, next) => {
    passport.authenticate("jwt", {
        session: false,
        successRedirect: '/success',
        failureRedirect: '/failure',
    })(req, res, next)
}

const sucessProtected = (req, res, next) => {
    res.status(200).json({ message: 'sucess' });
}

const failureProtected = (req, res, next) => {
    res.status(401).json({ message: 'unauthorized' });
}

const user_auth_post = asyncHandler(async (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    })(req, res, next)
});

const user_logout_get = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
};

export const userController = {
    user_auth_get,
    user_auth_post,
    user_create_get,
    user_create_post,
    user_logout_get,
    user_auth_jwt_protected,
    sucessProtected,
    failureProtected
}