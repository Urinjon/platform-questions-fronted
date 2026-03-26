import { ConfigService, EnvironmentService } from "@shared/services";

const environmentService = new EnvironmentService(process.env);
export const configService = new ConfigService(environmentService);
