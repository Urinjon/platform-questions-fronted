"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormDescription,
} from "@ui-kit/ui/form";
import { Input } from "@ui-kit/ui/input";
import { Button } from "@ui-kit/ui/button";
import { Spinner } from "@ui-kit/ui/spinner";
import { CalendarIcon, Save } from "lucide-react";
import { Calendar } from "@ui-kit/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@ui-kit/ui/popover";
import type { User } from "@entities/user";
import { useProfileForm } from "../model/use-profile-form";

import * as m from "paraglide/messages";

interface ProfileFormProps {
	user: User | null;
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
	const { form, onSubmit, isUpdating, isDirty, isValid } = useProfileForm(user);

	return (
		<Form {...form}>
			<form onSubmit={onSubmit} className="space-y-6">
				<div className="grid gap-6 sm:grid-cols-2">
					<FormField
						control={form.control}
						name="first_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{m.profileFormFirstName()}</FormLabel>
								<FormControl>
									<Input
										placeholder={m.profileFormFirstNamePlaceholder()}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									{m.profileFormFirstNameDescription()}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="last_name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{m.profileFormLastName()}</FormLabel>
								<FormControl>
									<Input
										placeholder={m.profileFormLastNamePlaceholder()}
										{...field}
									/>
								</FormControl>
								<FormDescription>
									{m.profileFormLastNameDescription()}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="my_username" {...field} />
							</FormControl>
							<FormDescription>
								{m.profileFormUsernameDescription()}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="user@example.com" {...field} />
							</FormControl>
							<FormDescription>
								{m.profileFormEmailDescription()}
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid gap-6 sm:grid-cols-2">
					<FormField
						control={form.control}
						name="university"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{m.profileUniversity()}</FormLabel>
								<FormControl>
									<Input placeholder="MIT" {...field} />
								</FormControl>
								<FormDescription>
									{m.profileFormUniversityDescription()}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="birthday"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{m.profileFormBirthdayLabel()}</FormLabel>
								<FormControl>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												className="w-full justify-start"
											>
												<CalendarIcon className="mr-2 h-4 w-4" />
												{field.value
													? field.value.toLocaleDateString("ru-RU")
													: m.profileFormBirthdayPlaceholder()}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="p-0">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date < new Date("1900-01-01") || date > new Date()
												}
												captionLayout="dropdown"
											/>
										</PopoverContent>
									</Popover>
								</FormControl>
								<FormDescription>
									{m.profileFormBirthdayDescription()}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className="flex justify-end pt-2">
					<Button type="submit" disabled={isUpdating || !isDirty || !isValid}>
						{isUpdating ? (
							<Spinner className="size-4" />
						) : (
							<Save className="size-4" />
						)}
						{m.profileFormSave()}
					</Button>
				</div>
			</form>
		</Form>
	);
};
