# Alty

This is a website that may be used to create fake links by tampering with `OpenGraph`.

## Developing

We need to get both the client (Sveltekit) and database (Pocketbase) up and running which is quite painless.

For the following steps, use whatever package manager you prefer; I will use `pnpm`.

Once you've created a project and installed dependencies with `pnpm install` (or `npm` or `yarn`), start a development server:

```bash
pnpm run dev
```

```bash
./pocketbase serve
```

Your terminal should indicate that both services are up and running.
