import type { Actions } from './$types';
import { pb } from '$lib/pb';


export const actions: Actions = {
	default: async ({request}) => {
		const formData = await request.formData();
		const formEntries = Object.fromEntries(formData.entries());
		console.log(formEntries);

		/*
		const realURL = formEntries.realURL
		const realURL_shortened = await fetch('https://zws.im/api/',
		{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					url: realURL
		})
		}).then(res => res.json()).then(json => json.url);

		formEntries.realURL = realURL_shortened;
		*/

		const status = await pb.collection('spoofs').create(formEntries);

		return { success: status.id };
	},
} satisfies Actions;
