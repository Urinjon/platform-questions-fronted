"use client";

import { Sidebar } from "@ui-kit/ui/sidebar";

import { AppFooterSideBar } from "./app-footer-side-bar";
import { AppContentSideBar } from "./app-content-side-bar";
import { AppHeaderSideBar } from "./app-header-side-bar";

export const AppSideBar: React.FC = () => {
	return (
		<Sidebar>
			<AppHeaderSideBar />
			<AppContentSideBar />
			<AppFooterSideBar />
		</Sidebar>
	);
};
