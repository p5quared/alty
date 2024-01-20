import { redirect, type Actions } from '@sveltejs/kit'

export const actions = ({
	default: async ({ locals}) => {
		console.log('logging out')
		locals.pb.authStore.clear()
		locals.user = undefined
		throw redirect(303, '/')
	}
}) satisfies Actions
