import { useOptimizationMiddlewares } from "./optimization/index.js"
import { useSecurityMiddlewares } from "./security/index.js";

export const useProdactionMiddlewares = () => {
    useOptimizationMiddlewares();
    useSecurityMiddlewares();
}