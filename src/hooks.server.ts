import type { Handle } from '@sveltejs/kit';
import { pb } from '$lib/pb';

export const handle = (async ({ event, resolve }) => {
	event.locals.pb = pb;

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

	try {
		if(event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh()){
			event.locals.user = structuredClone(event.locals.pb.authStore.model)
		}
	} catch (_) {
		event.locals.pb.authStore.clear()
		event.locals.user = undefined
	}

	console.log('resolving hook')
	const response = await resolve(event)

	console.log('setting cookie')
	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie())

	return response
}) satisfies Handle;

