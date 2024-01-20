import { error, type Actions } from "@sveltejs/kit";
import type { ServerLoad } from "@sveltejs/kit";

export const load = (async ({ locals }) => {
	const records = await locals.pb.collection('spoofs').getFullList({
		filter: `author="${locals.user?.id}"`
	});
	const validAuth = locals.pb.authStore.isValid && await locals.pb.collection('users').authRefresh()
	if (!validAuth) {
		locals.pb.authStore.clear()
		throw error(401 ,'Unauthorized, please login.')
	}
	return { records, user: locals.user }
}) satisfies ServerLoad;

export const actions = ({
	modifySpoof: async ({ request, locals }) => {
		const formData = await request.formData();
		const formEntries = Object.fromEntries(formData.entries());
		/*
		 * formEntries = {
		 * 	og_title,
		 * 	og_type,
		 * 	og_image,
		 * 	og_description,
		 * 	realURL
		 * }
		 */
		const record_id = formEntries.id.toString();

		try {
			const record = await locals.pb.collection('spoofs').update(record_id, formEntries);
			console.log(record.id)
			return { success: record, updateType: 'spoof' };
		} catch (e) {
			console.error(e);
			return { error: e.message };
		}
	},
	account: async ({ request, locals }) => {
		const formData = await request.formData();
		const formEntries = Object.fromEntries(formData.entries());

		try {
			const record = await locals.pb.collection('users').update(locals.user?.id, formEntries);
			console.log(record.id)
			return { success: record, updateType: 'account' };
		} catch (e) {
			console.error(e);
			return { error: e.message };
		}
	}
}) satisfies Actions
