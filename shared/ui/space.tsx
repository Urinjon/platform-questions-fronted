"use client";

import { cn } from "@shared/lib/utils";

interface ISpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    tag?: "section" | "div";
    axios?: "col" | "row";
    justify?: "start" | "center" | "end";
    align?: "start" | "center" | "end";
    p?: number;
    gap?: number;
}

export const Space: React.FC<ISpaceProps> = ({
    tag = "div",
    axios = "row",
    justify = "start",
    align = "start",
    p = 0,
    gap = 0,
    ...props
}) => {
    const Component = tag;

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
        `p-${p}`
    )
    

    return (
        <Component {...props} className={finalClass} />
    )
}