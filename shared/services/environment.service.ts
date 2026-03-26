export class EnvironmentService {
	private readonly env: NodeJS.ProcessEnv;

	constructor(env: NodeJS.ProcessEnv) {
		this.env = env;
	}

	public get(key: string): string | undefined {
		return this.env[key];
	}

	public getRequired(key: string): string {
		const value = this.get(key);
		if (!value) {
			throw new Error(`Environment variable ${key} is required`);
		}
		return value;
	}

	public getOptional(key: string): string | undefined {
		return this.get(key);
	}
}
