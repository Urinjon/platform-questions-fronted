import type { TClientRestApi } from "@shared/api";

export class LogoutApi {
	constructor(private readonly client: TClientRestApi) {}

	public async execute(): Promise<void> {
		await this.client.post("/v1/auth/logout/");
	}
}
