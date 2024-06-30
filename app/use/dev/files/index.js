import { useStaticFileServe } from "./static/useStaticFile.js"

export const useFilesMiddleware = () => {
    useStaticFileServe();
}