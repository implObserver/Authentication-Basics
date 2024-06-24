import asyncHandler from "express-async-handler";

const index_default_get = (req, res, next) => {
    res.render("index", { user: req.user });
};

export const indexController = {
    index_default_get,
}