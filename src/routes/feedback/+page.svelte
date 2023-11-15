<script lang="ts">
	import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { page } from '$app/stores';

	import type { ActionData } from './$types'
	export let form: ActionData;

	const toastStore = getToastStore();

	console.log(form)
	if (form?.success) {
		const t: ToastSettings = {
			message: "Feedback submitted successfully!",
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
	<h1 class="h1">Submit Feedback</h1>
	<form  method="POST" class="space-y-7 w-full max-w-lg order-1">
		<label for="title">
		<span class="text-lg">Name (Optional)</span>
			<input type="text" name="name" id="title" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="John Doe">
		</label>

		<label for="email">
		<span class="text-lg">Email (Optional)</span>
			<input type="email" name="email" id="email" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="example@email.com">
		</label>

		<label for="body">
		<span class="text-lg">Message</span>
			<textarea name="body" id="body" rows="5" class="form-input mt-1 block w-full outline outline-2 outline-primary-500 text-black"
				placeholder="I love this site!"></textarea>
		</label>

		<button type="submit" class="btn variant-filled-primary">
			Create
		</button>
	</form>
</div>
