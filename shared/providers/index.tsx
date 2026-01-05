"use client";

import 'reflect-metadata';


import { ThemeProvider } from "@shared/providers/theme.provider";
import { PropsWithChildren } from "react";


export const AppProviders: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider>{children}</ThemeProvider>
    )
}