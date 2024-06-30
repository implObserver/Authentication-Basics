import { useCORS } from "./useCORS/useCORS.js";
import { useHelmet } from "./useHelmet/useHelmet.js";

export const useSecurityMiddlewares = () => {
    useCORS();
    useHelmet();
}