export interface ApiError {
	status: number;
	code: string;
	title: string;
	detail: string;
}

export interface ApiPagination {
	page: number;
	limit: number;
	total: number;
	totalPages: number;
}

export interface ApiMeta {
	pagination?: ApiPagination | null;
	[key: string]: string | number | boolean | null | undefined | object;
}

export interface ApiResponse<TData> {
	data: TData | TData[] | null;
	meta?: ApiMeta | null;
	errors?: ApiError[] | null;
}
