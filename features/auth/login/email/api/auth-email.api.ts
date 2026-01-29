import type { TClientRestApi } from "@shared/api";
import type { LoginEmailDto } from "../model/types";

export class LoginEmailApi {
	constructor(private readonly client: TClientRestApi) {}

	public async execute(dto: LoginEmailDto) {
		const response = await this.client.post("v1/auth/login/email/", dto);
		return response.data;
	}
}
