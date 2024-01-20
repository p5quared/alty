<script lang='ts'>
import type { PageData } from './$types';
export let user: PageData['user'];

// TODO: make account management work
</script>

<div class="">
	<h1 class="h2">
		Account
	</h1>
	<p>
		You can change your account details here:
	</p>
	<form method="POST" action="?/account"
		class="card variant-filled-surface p-4 space-y-7 w-full max-w-lg order-1">
		<div class="">
			<label for="username">Username</label>
			<input value={user.username}
				name="username"
				type="text" id="username" class="outline outline-2 outline-primary-500 text-black" placeholder="Username" />
		</div>
		<div class="">
			<label for="email">Email</label>
			<input value={user.email}
				name="email"
				type="email" id="email" class="outline outline-2 outline-primary-500 text-black" placeholder="Email" />
		</div>
		<div class="">
			<label for="password">Current Password <span class="text-sm text-gray-300">(If changing password)</span>
			</label>
			<input
				name="oldPassword"
				minlength="8"
				maxlength="72"
				type="password" id="password" class="outline outline-2 outline-primary-500 text-black" placeholder="Password" />
		</div>
		<div class="">
			<label for="password">New Password</label>
			<input
				name="password"
				minlength="8"
				maxlength="72"
				type="password" id="password" class="outline outline-2 outline-primary-500 text-black" placeholder="Password" />
		</div>

		<div class="">
			<label for="password">Confirm New Password</label>
			<input
				name="passwordConfirm"
				minlength="8"
				maxlength="72"
				type="password" id="password" class="outline outline-2 outline-primary-500 text-black" placeholder="Confirm Password" />
		</div>
		<button
			type="submit" class="btn variant-filled-primary">
		Save
		</button>
	</form>
</div>

