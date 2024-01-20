<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	// TODO: Third party sign-in

	let registerFlow = false;
</script>

<div class="mx-auto space-y-7 w-full max-w-lg order-1">
	<h1 class="h1 card-header">Login or Register</h1>
	<form method="POST" use:enhance class="space-y-4">
		<label>
			Email
			<input
				name="email"
				type="email"
				placeholder="email@example.com"
				autocomplete="email"
				class="input mt-1"
				required
			/>
		</label>
		<label>
			Password
			<input
				minlength="8"
				maxlength="72"
				name="password"
				type="password"
				placeholder="password123"
				autocomplete="on"
				class="input mt-1"
				required
			/>
		</label>
		{#if registerFlow}
		<label transition:slide>
			Confirm Password
			<input
				minlength="8"
				maxlength="72"
				name="passwordConfirm"
				type="password"
				placeholder="password123"
				autocomplete="on"
				class="input mt-1"
				required
			/>
		</label>
		{/if}
		<button type="submit" formaction="?/login" class="btn variant-filled-warning shadow mt-4">
			Sign-In
		</button>
		{#if registerFlow}
		<button
			type="submit"
			formaction="?/register"
			class="btn variant-filled-primary shadow mt-4 ml-4"
		>
			Register
		</button>
		{:else}
		<button
			type="button"
			on:click={() => (registerFlow = true)}
			class="btn variant-filled-primary shadow mt-4 ml-4">
			Register
		</button>
		{/if}

	</form>
	<hr class="m-8" />
	<h3 class="h3 mb-4">Third-Party Sign-In: (Coming Soon!)</h3>
	<div class="placeholder m-4 p-4" />
	<div class="placeholder m-4 p-4" />
	<div class="placeholder m-4 p-4" />
</div>
