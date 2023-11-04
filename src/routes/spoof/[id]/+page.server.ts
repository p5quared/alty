import type { PageServerLoad } from './$types';
import  { pb }  from '$lib/pb';

export const load: PageServerLoad = async ({ params }) => {
	const data = await pb.collection('spoofs').getOne(params.id);
	return { data }
}
