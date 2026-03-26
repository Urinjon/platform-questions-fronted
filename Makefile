
dev:
	bun run dev

ci:
	bun run paraglide:compile
	bun run lint:fix
	bun run format:write
	bun run build
	bun run knip

t:
	bun run paraglide:compile
