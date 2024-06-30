import { useCompression } from "./compressions/useCompression.js";
import { useLimitter } from "./limitters/useLimitter.js"

export const useOptimizationMiddlewares = () => {
    useLimitter();
    useCompression();
}