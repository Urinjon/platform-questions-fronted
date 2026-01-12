export function generateUniqId(seed: string): string {
	const prefix = "id_";
	const postfix = `_${seed}`;
	return `${prefix}${Math.random().toString(36).substring(2, 15)}${postfix}`;
}
