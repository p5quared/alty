import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';


export const load = ( async ({ locals }) => {
	const validAuth = locals.pb.authStore.isValid && await locals.pb.collection('users').authRefresh()
	if (!validAuth) {
		locals.pb.authStore.clear()
		throw error(401 ,'Unauthorized, please login.')
	}

}) satisfies LayoutServerLoad;
