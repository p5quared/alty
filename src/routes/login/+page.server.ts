import type { Actions } from "@sveltejs/kit";
import { redirect, error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load = (async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/success')
	}
}) satisfies PageServerLoad

export const actions: Actions = {
	default: async ({request, locals}) => {
		const form = Object.fromEntries( await request.formData() );
		console.table(form)

		try {
			await locals.pb.collection('users').authWithPassword(form.email.toString(), form.password.toString())
		} catch (e) {
			throw error(500, 'Something went wrong while logging in');
		}

		if(locals.pb.authStore.isValid) {
			throw redirect(303, '/success')
		} else {
			locals.pb.authStore.clear()
			throw error(401, 'Invalid credentials');
		}
	}
}

