import { setDeserializeUser } from "./deserializeUser/deserializeUser.js";
import { setSerializeUser } from "./serializeUser/serializeUser.js";
import { usePassportSession } from "./usePassportSession/usePassportSession.js"
import { useLocalStrategy } from "./useStrategy/useLocalStrategy.js";

export const usePassport = () => {
    usePassportSession();
    setSerializeUser();
    setDeserializeUser();
    useLocalStrategy();
}