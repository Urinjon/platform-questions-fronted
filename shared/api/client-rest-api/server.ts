"use client";

import axios, { type AxiosInstance, type CreateAxiosDefaults } from "axios";

export type TClientRestApi = AxiosInstance;

const defaultOptions: CreateAxiosDefaults = {
	baseURL: "http://localhost:8000/",
	timeout: 10000,
	withCredentials: true,
};

export function factoryClientRestApi(
	init: CreateAxiosDefaults = defaultOptions,
): TClientRestApi {
	const instance = axios.create({ ...init });
	return instance;
}
