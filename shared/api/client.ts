"use client";

import { attachAccessToken, updateRefreshToken } from "@features/auth";
import axios, { type AxiosInstance, type CreateAxiosDefaults } from "axios";

export type TClientRestApi = AxiosInstance;

const defaultOptions: CreateAxiosDefaults = {
	baseURL: "http://localhost:8000/",
	timeout: 10000,
	withCredentials: true,
};

export async function factoryClientRestApi(
	init: CreateAxiosDefaults = defaultOptions,
): Promise<TClientRestApi> {
	const instance = axios.create({ ...init });

	await attachAccessToken(instance);
	await updateRefreshToken(instance);

	return instance;
}
