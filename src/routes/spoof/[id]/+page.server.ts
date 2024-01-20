import type { ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async ({ params, locals }) => {
	if (!params.id) {
		return { status: 400 };
	}
	const data = await locals.pb.collection('spoofs').getOne(params.id);
	return { data }
}
