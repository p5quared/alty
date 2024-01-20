<script lang='ts'>
import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";

import AccountManagement from './AccountManagement.svelte';
import YourLinks from './YourLinks.svelte';
import type { ActionData, PageData } from './$types';
export let data: PageData;

const toastStore = getToastStore();
export let form: ActionData;
if (form?.success) {
	const t: ToastSettings = {
		message: `Successfully updated your ${form.updateType}!`,
		autohide: true,
		timeout: 5000
	}
	toastStore.trigger(t);
} else if (form?.error) {
	const t: ToastSettings = {
		message: `Something went wrong: "${form.error}" Please try again.`,
		timeout: 10000
	}
	toastStore.trigger(t);
}


const links = data.records
const user = data.user

</script>

<div class="container mx-auto lg:flex gap-8">
	<AccountManagement {user} />
	<YourLinks {links} />
</div>




