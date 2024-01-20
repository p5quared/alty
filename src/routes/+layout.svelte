<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, Toast, initializeStores } from '@skeletonlabs/skeleton';
	import type { LayoutServerData } from './$types';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();

	export let data: LayoutServerData;
</script>

<Toast />

<div class="p-12 container mx-auto">
	<nav class="mb-12">
		<ul class="flex items-baseline gap-6">
			<li>
				<a href="/" class="anchor no-underline flex gap-2">
					<img src="/android-chrome-512x512.png" alt="Logo" width="50" class="" />
					<h1 class="h1 mt-auto lg:visible invisible">ResourcedOnline</h1>
				</a>
			</li>
			{#if !data.user}
				<li class="ml-auto self-center">
					<a href="/login" class="btn variant-filled-warning ml-auto">Login to Save</a>
				</li>
			{:else}
				<li class="ml-auto self-center">
					<a href="/user" class="btn variant-filled-warning">Account</a>
				</li>
				<li class="self-center">
					<form action="/logout" method="POST">
						<button class="btn variant-filled-warning">Logout</button>
					</form>
				</li>
			{/if}
			<li class="pr-12 self-center">
				<a class="btn btn-lg variant-filled-primary" href="/create">Create</a>
			</li>
		</ul>
	</nav>
	<slot />
</div>
