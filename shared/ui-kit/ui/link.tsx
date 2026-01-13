import Link, { type LinkProps } from "next/link";

export function LinkApp({
	...props
}: LinkProps & React.HTMLAttributes<HTMLAnchorElement>) {
	return <Link {...props}>{props.children}</Link>;
}
