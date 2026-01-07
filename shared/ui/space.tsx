"use client";

import { cn } from "@shared/lib/utils";

interface ISpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: "section" | "div";
    axios?: "col" | "row";
    justify?: "start" | "center" | "end";
    align?: "start" | "center" | "end";
    p?: number;
    gap?: number;
    isWrap?: boolean;
    fullWidth?: boolean;
    fullScreenHeight?: boolean;
}

export const Space: React.FC<ISpaceProps> = ({
    as = "div",
    axios = "row",
    justify = "start",
    align = "start",
    p = 0,
    gap = 0,
    isWrap = false,
    fullWidth = false,
    fullScreenHeight = false,
    ...props
}) => {
    const Component = as;

    const baseClass = "flex";

    const axiosClass = {
        col: "flex-col",
        row: "flex-row",
    } as const;

    const justifyClass = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
    } as const;

    const alignClass = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
    } as const;

    const finalClass = cn(
        baseClass,
        axiosClass[axios],
        justifyClass[justify],
        alignClass[align],
        `gap-${gap}`,
        `p-${p}`,
        isWrap && "flex-wrap",
        fullWidth && "w-full",
        fullScreenHeight && "min-h-screen",
        props.className
    )
    

    return (
        <Component {...props} className={finalClass} />
    )
}