<script lang="ts">
	import { browser } from '$app/environment';

	import type { PageData } from './$types';
	export let data: PageData;

	const fields = data.data
	console.log('Page data:');
	console.log(fields);


	if (browser) {
		// redirect after 0.25 seconds
		setTimeout(() => {
			console.log('Redirecting to...', fields.realURL);
			window.location.href = fields.realURL;
			}, 5000);
	}
</script>
<svelte:head>
	<title>{fields.og_title}</title>
	<meta name="description" content={fields.og_description}/>
	<meta property="og:title" content={fields.og_title}/>
	<meta property="og:description" content={fields.og_description}/>
	<meta property="og:image" content={fields.og_image}/>
	<meta property="og:url" content={fields.og_url}/>
	<meta property="og:type" content={fields.og_type}/>
</svelte:head>

<h1 class="h1">Sike!</h1>

<ul>
{#each Object.entries(fields) as [k, v]}
	<li>{k}: {v}</li>
{/each}
</ul>
