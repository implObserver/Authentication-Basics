import jwt from "jsonwebtoken";
import fs from 'fs';
import { __pathToKeyFolder } from "../../passport/useStrategy/useJWTStrategy/keypair/generateKeypair.js";
import path from "path";

const pathToPrivKey = path.join(__pathToKeyFolder, 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToPrivKey, 'utf8');

const pathToPubKey = path.join(__pathToKeyFolder, 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToPubKey, 'utf8');

//jwt.verify(signedJWT, PUB_KEY, { algorithms: ['RS256'] }, (err, payload) => {});

export const issueJWT = (user) => {
    const _id = user.id;
    const expiresIn = '1d';

    const payload = {
        sub: _id,
        iat: Date.now()
    }

    const signedToken = jwt.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });

    return {
        token: 'Bearer ' + signedToken,
        expires: expiresIn
    }
}