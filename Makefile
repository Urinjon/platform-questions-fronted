

test:
	bun run lint:fix
	bun run format:write
	bun run build
	bun run knip
