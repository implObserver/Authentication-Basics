import { dirname } from 'path';
import { fileURLToPath } from 'url';

const EMBEDDING_DEPTH = 2;

export let __dirname = '';

const __dirToFile = dirname(fileURLToPath(import.meta.url));
const myArray = __dirToFile.split("/");

for (let i = 1; i < myArray.length - EMBEDDING_DEPTH; i++) {
    __dirname += `/${myArray[i]}`;
}