"use client";
import { Sidebar } from "@ui-kit/ui/sidebar";
import { AppFooterSideBar } from "./app-footer-side-bar";
import { AppHeaderSideBar } from "./app-header-side-bar";

export const AppSideBar: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<Sidebar>
			<AppHeaderSideBar />
			{children}
			<AppFooterSideBar />
		</Sidebar>
	);
};
