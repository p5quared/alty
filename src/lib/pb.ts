import { dev } from '$app/environment';
import PocketBase from 'pocketbase';

const dbSource = dev ? 'http://127.0.0.1:8090' : process.env.POCKETBASE_URL;
const pb = new PocketBase(dbSource);

export {pb};
