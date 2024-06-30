import fs from 'fs';
import crypto from 'crypto'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __pathToKeyFolder = dirname(fileURLToPath(import.meta.url));

const getKeyPair = () => {
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        PublicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
    });
    fs.writeFileSync(__pathToKeyFolder + '/id_rsa_pub.pem', keyPair.publicKey.toString());
    fs.writeFileSync(__pathToKeyFolder + '/id_rsa_priv.pem', keyPair.privateKey.toString());
}