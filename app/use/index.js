import { useDevMiddlewares } from "./dev/index.js";
import { useProdactionMiddlewares } from "./prodaction/index.js"

export const useGlobalMiddlewares = () => {
    //useProdactionMiddlewares();
    useDevMiddlewares();
}