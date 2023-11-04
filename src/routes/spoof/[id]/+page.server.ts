import type { PageServerLoad } from './$types';
import PocketBase from 'pocketbase';

const pbURL = 'http://127.0.0.1:8090';
const pb = new PocketBase(pbURL);

export const load: PageServerLoad = async ({ params }) => {
	const data = await pb.collection('spoofs').getOne(params.id);
	return { data }
}
