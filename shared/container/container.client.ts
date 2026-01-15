"use client";

import {
	CookieService,
	type ICookieService,
} from "@shared/services/cookie.service";
import {
	type ILocalStorageService,
	LocalStorageService,
} from "@shared/services/local-storage.service";

function factoryCookieService(): ICookieService {
	return new CookieService();
}

function factoryLocalStorageService(): ILocalStorageService {
	return new LocalStorageService();
}

const cookieService = factoryCookieService();
const localStorageService = factoryLocalStorageService();

export { cookieService, localStorageService };
