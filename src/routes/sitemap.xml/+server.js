import { pb } from '$lib';
import { dev } from '$app/environment';

const site = dev ? 'http://localhost:8090' : 'https://alty-two.vercel.app';

export async function GET({setHeaders}) {
	setHeaders({ 'Content-Type': 'application/xml' });

	const records = await pb.collection('spoofs').getFullList();
	console.log(records);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
		<loc>${site}</loc>
		<changefreq>weekly</changefreq>
		<priority>0.7</priority>
		</url>
		${records.map(spoof  =>  `
		<url>
		<loc>${site}/spoof/${spoof.id}</loc>
		<changefreq>daily</changefreq>
		<lastmod>${spoof.updated}</lastmod>
		</url>
		`).join('')}
		</urlset>`;

		return new Response(sitemap);
};
