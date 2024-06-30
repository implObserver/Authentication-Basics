import compression from "compression";
import { app } from "../../../../app.js";

export const useCompression = () => {
    app.use(compression());
}