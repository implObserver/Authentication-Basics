import RateLimit from "express-rate-limit";
import { app } from "../../../../app.js";

const limiter = RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 200,
});

export const useLimitter = () => { app.use(limiter) };