// api/user.api.ts
import api from "@shared/api/axios";
import { useQuery } from "@tanstack/react-query";

export const useMe = () => {
	return useQuery({
		queryKey: ["me"],
		queryFn: async () => {
			const res = await api.get("/v1/auth/me/");
			return res.data;
		},

		enabled: false,
		retry: 1,
	});
};
