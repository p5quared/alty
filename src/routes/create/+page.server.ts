import type { Actions }  from './$types';


export const actions: Actions = {
	default: async ({request, locals}) => {
		const formData = await request.formData();
		const formEntries = Object.fromEntries(formData.entries());
		/*
		 * formEntries = {
		 * 	og_title,
		 * 	og_type,
		 * 	og_image,
		 * 	og_descr,
		 * 	realURL
		 * }
		 */
		try {
			const status = await locals.pb
				.collection('spoofs')
				.create(formEntries);

			return { success: status.id };
		} catch (e) {
			console.log(e);
			return { error: e.message };
		}
	},
} satisfies Actions;
