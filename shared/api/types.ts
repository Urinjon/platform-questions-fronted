export interface ApiError {
	status: number;
	code: string;
	title: string;
	detail: string;
}

export interface ApiMeta {
	[key: string]: string | number | boolean | null | undefined | object;
}

export interface ApiResponse<TData> {
	data: TData | TData[] | null;
	meta?: ApiMeta | null;
	errors?: ApiError[] | null;
}
