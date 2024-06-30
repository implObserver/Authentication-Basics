import helmet from "helmet";
import { app } from "../../../../app.js";

export const useHelmet = () => {
    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
            },
        }),
    );
}