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
</script>

<div class="container mx-auto space-y-5">
	<h1 class="h1">Create a Misdirection!</h1>
	<form  method="POST" class="space-y-7 lg:max-w-lg">
		<label for="title">
		<span class="text-lg">Title</span>
			<input type="text" name="og_title" id="title" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black" placeholder="Misdirection Title">
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
			<input type="url" name="og_image" id="image" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
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
			<textarea name="og_description" id="description" class="form-textarea mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="This is a real page about real things!!!"></textarea>
		</label>

		<button type="submit" class="btn variant-filled-primary">
			Create
		</button>
	</form>
</div>
