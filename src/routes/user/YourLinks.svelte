<script lang="ts">
	import { page } from '$app/stores';
	import { Accordion, AccordionItem, clipboard, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	export let links: PageData['records'];

	const formatDate = (date: string) => {
		const d = new Date(date);
		return d.toLocaleDateString();
	};

	const limitStringLen = (len: number) => (str: string) => {
		if (str.length > len) {
			return str.slice(0, len) + '...';
		}
		return str;
	};

	const formatURLHeader = (url: string) => {
		const string30 = limitStringLen(30);
		const urlObj = new URL(url);
		return `${urlObj.hostname}${string30(urlObj.pathname)}`;
	};

	const spoofLink = (id: string) => `https://${$page.url.hostname}/spoof/${id}`;

	const toastStore: ToastStore = getToastStore();
	const clipboardToastSettings: ToastSettings = {
		message: 'Copied to clipboard.',
		autohide: true,
		timeout: 3000
	};
</script>

<div>
	<h2 class="h2">Your Spoofs</h2>
	<p>View and manage your created spoofs.</p>
	<div class="space-y-2 divide-y-2 divide-x">
		<Accordion
			class="card variant-filled-surface min-w-full"
			transitions={true}
			transitionInParams={{ duration: 500 }}
			transitionOutParams={{ duration: 500 }}
		>
			{#each links as link}
				<AccordionItem>
					<svelte:fragment slot="summary">
						{formatURLHeader(link.og_url)}
					</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="card variant-filled-surface overflow-hidden max-w-lg h-min mt-4">
							<header>
								<h3 class="h3 text-primary-400 ml-2">Preview</h3>
								<img src={link.og_image} alt={link.og_title} class="w-full max-h-96 object-cover" />
							</header>
							<div class="p-4 space-y-2">
								<h2 class="h2 text-primary-400">{link.og_title}</h2>
								<p class="text-sm font-sans">{link.og_description}</p>
							</div>
						</div>
						<form method="POST" class="space-y-4">
							<input type="hidden" name="id" value={link.id} />
							<label for="title">
								<span class="text-lg">Title</span>
								<input
									bind:value={link.og_title}
									type="text"
									name="og_title"
									id="title"
									class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
								/>
							</label>

							<label for="type">
								<span class="text-lg">Type</span>
								<select
									name="og_type"
									id="type"
									class="form-select mt-1 block w-full outline outline-2 outline-primary-500 text-black"
								>
									<option value="website">website</option>
									<option value="article">article</option>
									<option value="music">music (song)</option>
									<option value="video ">video (other)</option>
								</select>
							</label>

							<label for="image">
								<span class="text-lg">Image URL</span>
								<input
									bind:value={link.og_image}
									type="url"
									name="og_image"
									id="image"
									class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
								/>
							</label>

							<label for="realURL">
								<span class="text-lg">Real URL</span>
								<input
									bind:value={link.realURL}
									type="url"
									name="realURL"
									id="realURL"
									class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
								/>
							</label>

							<label for="fakeURL">
								<span class="text-lg">Fake URL</span>
								<input
									bind:value={link.og_url}
									type="url"
									name="og_url"
									id="fakeURL"
									class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
								/>
							</label>

							<label for="description">
								<span class="text-lg">Description</span>
								<textarea
									bind:value={link.og_description}
									name="og_description"
									id="description"
									class="form-textarea mt-1 block w-full outline outline-2 outline-primary-500 text-black"
								/>
							</label>
							<div class="flex">
								<button
									type="button"
									class="btn variant-filled-secondary"
									use:clipboard={spoofLink(link.id)}
									on:click={() => {
										toastStore.trigger(clipboardToastSettings);
									}}
								>
									Copy Link
								</button>
								<button formaction="?/modifySpoof"
									type="submit" class="btn variant-filled-primary ml-auto"> Save </button>
							</div>
						</form>
						<div class="flex justify-between">
							<p class="text-sm text-gray-500 mt-2">
								Created on {formatDate(link.created)}
							</p>
							<p class="text-sm text-gray-500">
								Last updated on {formatDate(link.updated)}
							</p>
						</div>
					</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</div>
