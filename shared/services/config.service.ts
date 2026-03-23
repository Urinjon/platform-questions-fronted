import type { EnvironmentService } from "./environment.service";

export class ConfigService {
	private readonly envService: EnvironmentService;

	constructor(envService: EnvironmentService) {
		this.envService = envService;
	}

	public getFrontendUrl(): string {
		return this.envService.getRequired("FRONTEND_URL");
	}
}
