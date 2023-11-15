import { pb } from '$lib';
import { dev } from '$app/environment';

const site = dev ? 'http://localhost:8090' : 'https://resourcedonline.com';

export async function GET({setHeaders}) {
	setHeaders({ 'Content-Type': 'text/plain' });

	const records = await pb.collection('spoofs').getFullList();
	console.log(records);

	const robots = 
`User-agent: *
Allow: /


Sitemap: ${site}/sitemap.xml`;

		return new Response(robots);
};
