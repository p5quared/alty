<script lang="ts">
	import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { page } from '$app/stores';

	import type { ActionData } from './$types'
	export let form: ActionData;

	const toastStore = getToastStore();

	console.log(form)
	if (form?.success) {
		const t: ToastSettings = {
			message: "Misdirection created! Here's the link:\n" + `https://${$page.url.hostname}/spoof/${form?.success}`,
			autohide: false
		}
		toastStore.trigger(t);
	} else if (form?.error) {
		const t: ToastSettings = {
			message: `Something went wrong: "${form.error}" Please try again.`,
			timeout: 10000
		}
		toastStore.trigger(t);
	}

	let og_title = "Cat Facts";
	let og_image = "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg";
	let og_descr = "Cat facts are the best facts!";
</script>

<div class="container mx-auto space-y-5">
	<h1 class="h1">Create a Misdirection!</h1>
	<div class="lg:flex lg:gap-14">
		<div class="order-2">
		<h2 class="h2">Opengraph Preview<h2>
		<div class="card variant-filled-surface overflow-hidden max-w-lg h-min mt-4">
			<header>
			<img src={og_image} alt={og_title} class="w-full max-h-96 object-cover">
			</header>
			<div class="p-4 space-y-2">
				<h2 class="h2 text-primary-400">{og_title}</h2>
				<p class="text-sm font-sans">{og_descr}</p>
			</div>
		</div>
	</div>
	<form  method="POST" class="space-y-7 w-full max-w-lg order-1">
		<label for="title">
		<span class="text-lg">Title</span>
			<input bind:value={og_title} type="text" name="og_title" id="title" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black" placeholder="Misdirection Title">
		</label>

		<label for="type">
		<span class="text-lg">Type</span>
		<select name="og_type" id="type" class="form-select mt-1 block w-full outline outline-2 outline-primary-500 text-black">
			<option value="website">website</option>
			<option value="article">article</option>
			<option value="music">music (song)</option>
			<option value="video ">video (other)</option>
		</select>
		</label>

		<label for="image">
		<span class="text-lg">Image URL</span>
			<input bind:value={og_image} type="url" name="og_image" id="image" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif">
		</label>

		<label for="realURL">
		<span class="text-lg">Real URL</span>
			<input type="url" name="realURL" id="realURL" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="https://youtu.be/dQw4w9WgXcQ">
		</label>

		<label for="fakeURL">
		<span class="text-lg">Fake URL</span>
			<input type="url" name="og_url" id="fakeURL" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="https://news.com/serious-article">
		</label>

		<label for="description">
		<span class="text-lg">Description</span>
			<textarea bind:value={og_descr} name="og_description" id="description" class="form-textarea mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="This is a real page about real things!!!"></textarea>
		</label>

		<button type="submit" class="btn variant-filled-primary">
			Create
		</button>
	</form>
	</div>
</div>
