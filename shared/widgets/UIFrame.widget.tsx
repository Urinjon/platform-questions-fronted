"use client";

import { Alert, AlertDescription, AlertTitle } from "@ui-kit/ui/alert";
import { Button } from "@ui-kit/ui/button";
import { ButtonGroup } from "@ui-kit/ui/button-group";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ui-kit/ui/card";
import { Input } from "@ui-kit/ui/input";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@ui-kit/ui/input-group";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@ui-kit/ui/pagination";
import {
	AlertCircleIcon,
	CheckCircle2Icon,
	CheckIcon,
	CreditCardIcon,
	InfoIcon,
	MailIcon,
	PopcornIcon,
	SearchIcon,
	StarIcon,
} from "lucide-react";

import { InputFile } from "@ui-kit/ui/input-file";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@ui-kit/ui/sidebar";
import { Container } from "./Container.widget";
import { SideBarLinks } from "@shared/config/routing.config";
import { SwitchTheme } from "@modules/settings";

export const UIFrame: React.FC = () => {
	return (
		<SidebarProvider>
			<Container className="flex flex-col items-center gap-3">
				<Sidebar>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>
								Application <SidebarTrigger />
							</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									{SideBarLinks.map((item) => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild>
												<a href={item.url}>
													<item.icon />
													<span>{item.title}</span>
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</Sidebar>

				<div className="text-red-500">TEST</div>

				<SidebarTrigger />
				<Button variant={"default"}>Button</Button>
				<SwitchTheme />
				<ButtonGroup orientation="horizontal">
					<Button variant={"default"}>Button</Button>
					<Button variant={"link"}>Button</Button>
					<Button variant={"destructive"}>Button</Button>
				</ButtonGroup>
				<div className="grid w-full max-w-xl items-start gap-4">
					<Alert>
						<CheckCircle2Icon />
						<AlertTitle>Success! Your changes have been saved</AlertTitle>
						<AlertDescription>
							This is an alert with icon, title and description.
						</AlertDescription>
					</Alert>
					<Alert>
						<PopcornIcon />
						<AlertTitle>
							This Alert has a title and an icon. No description.
						</AlertTitle>
					</Alert>
					<Alert variant="destructive">
						<AlertCircleIcon />
						<AlertTitle>Unable to process your payment.</AlertTitle>
						<AlertDescription>
							<p>Please verify your billing information and try again.</p>
							<ul className="list-inside list-disc text-sm">
								<li>Check your card details</li>
								<li>Ensure sufficient funds</li>
								<li>Verify billing address</li>
							</ul>
						</AlertDescription>
					</Alert>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card Description</CardDescription>
						<CardAction>Card Action</CardAction>
					</CardHeader>
					<CardContent>
						<p>Card Content</p>
					</CardContent>
					<CardFooter>
						<p>Card Footer</p>
					</CardFooter>
				</Card>
				<Card>
					<Input />
					<InputFile />
				</Card>
				<div className="grid w-full max-w-sm gap-6">
					<InputGroup>
						<InputGroupInput placeholder="Search..." />
						<InputGroupAddon>
							<SearchIcon />
						</InputGroupAddon>
					</InputGroup>
					<InputGroup>
						<InputGroupInput type="email" placeholder="Enter your email" />
						<InputGroupAddon>
							<MailIcon />
						</InputGroupAddon>
					</InputGroup>
					<InputGroup>
						<InputGroupInput placeholder="Card number" />
						<InputGroupAddon>
							<CreditCardIcon />
						</InputGroupAddon>
						<InputGroupAddon align="inline-end">
							<CheckIcon />
						</InputGroupAddon>
					</InputGroup>
					<InputGroup>
						<InputGroupInput placeholder="Card number" />
						<InputGroupAddon align="inline-end">
							<StarIcon />
							<InfoIcon />
						</InputGroupAddon>
					</InputGroup>
				</div>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</Container>
		</SidebarProvider>
	);
};
