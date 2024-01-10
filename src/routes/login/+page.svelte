<script lang='ts'>
	import { enhance } from '$app/forms';
</script>


<div class="mx-auto space-y-7 w-full max-w-lg order-1">
		<form method="POST" use:enhance>
			<h1 class="h1 pb-6 card-header text-">Login or Register</h1>
			<label>
				Email
				<input
					name="email"
					type="email"
					placeholder="you@example.com"
					autocomplete="email"
					class="input"
					required
				/>
			</label>
			<label class="mt-4">
				Password
				<input
				name="password"
				type="password"
				placeholder="password123"
				autocomplete="new-password"
				class="input"
				required
				/>
			</label>
			<button type="submit" class="btn variant-filled-primary shadow mt-4 ml-4">Sign-In</button>
		</form>
		<hr class="m-8">
		<h3 class="h3 mb-4">Third-Party Sign-In:</h3>
		<div class="placeholder m-4 p-4"></div>
		<div class="placeholder m-4 p-4"></div>
		<div class="placeholder m-4 p-4"></div>
</div>

