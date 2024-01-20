import type { Actions } from "@sveltejs/kit";
import { redirect, error } from "@sveltejs/kit";
import type { ServerLoad } from "@sveltejs/kit";


export const load = (async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/user')
	}
}) satisfies ServerLoad

export const actions = {
	login: async ({request, locals}) => {
		const form = Object.fromEntries( await request.formData() );
		const data = {
			email: form.email.toString(),
			password: form.password.toString(),
			passwordConfirm: form.passwordConfirm?.toString(),
		}

		try {
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (e) {
			console.error(e)
			throw error(500, 'Something went wrong while logging in');
		}

		if(locals.pb.authStore.isValid) {
			throw redirect(303, '/user')
		} else {
			locals.pb.authStore.clear()
			throw error(401, 'Invalid credentials');
		}
	},
	register: async ({request, locals}) => {
		const form = Object.fromEntries( await request.formData() );
		const data = {
			email: form.email.toString(),
			password: form.password.toString(),
			passwordConfirm: form.passwordConfirm?.toString(),
		}

		try {
			await locals.pb.collection('users').create(data)
		} catch (e) {
			console.error(e)
			throw error(500, 'Something went wrong while registering...');
		}

		try {
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (e) {
			throw error(500, 'Something went wrong while logging in');
		}

		if(locals.pb.authStore.isValid) {
			throw redirect(303, '/user')
		} else {
			locals.pb.authStore.clear()
			throw error(401, 'Invalid credentials');
		}
	}
} satisfies Actions;

