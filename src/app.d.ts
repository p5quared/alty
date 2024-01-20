// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import PocketBase from 'pocketbase';

declare global {
	declare namespace App {
		// interface Locals {}
		interface Locals {
			pb: PocketBase;
			user?: PocketBase.authStore.model;
		}
		// interface PageData {}
		interface PageData {
			user?: {
				avatar: string,
				collectionID: string,
				created: string,
				email: string,
				emailVisibility: boolean,
				id: string,
				updated: string,
				username: string,
				verified: boolean
			}
		}
		// interface Error {}
		// interface Platform {}
	}
}

export { };
