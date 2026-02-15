// app/email-confirm/page.tsx
import { redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ui-kit/ui/card";
import { Button } from "@ui-kit/ui/button";

type Status = "success" | "invalid" | null;

interface Props {
	searchParams: Promise<{ status?: Status }>;
}

export default async function EmailConfirmPage({ searchParams }: Props) {
	const params = await searchParams;
	const status = params.status || null;

	const validStatuses: Status[] = ["success", "invalid"] as const;

	if (!status || !validStatuses.includes(status)) {
		redirect("/");
	}

	const states = {
		success: {
			icon: CheckCircle2,
			color: "text-emerald-500",
			bg: "bg-emerald-950/30 border-emerald-800/50",
			title: "Email успешно подтверждён!",
			description: "Спасибо! Ваш аккаунт теперь полностью активирован.",
			actionText: "Перейти на страницу с вопросами",
			actionHref: "/questions",
			extra: "Можете закрыть эту страницу или перейти дальше.",
		},
		invalid: {
			icon: XCircle,
			color: "text-red-500",
			bg: "bg-red-950/30 border-red-800/50",
			title: "Ссылка недействительна",
			description:
				"Возможно, ссылка устарела, была использована ранее или содержит ошибку.",
			actionText: "Запросить новое письмо",
			actionHref: "/resend-verification",
			extra:
				"Проверьте, что вы переходите по самой последней полученной ссылке.",
		},
	};

	const current = states[status] || states.invalid;

	const Icon = current.icon;

	return (
		<div className="min-h-screen bg-gradient-to-b from-background to-muted/40 flex items-center justify-center p-4">
			<Card className={`w-full max-w-md ${current.bg} border shadow-xl`}>
				<CardHeader className="text-center pb-2">
					<div className="mx-auto mb-4 rounded-full bg-background/80 p-5 shadow-md">
						<Icon className={`h-12 w-12 ${current.color}`} strokeWidth={1.5} />
					</div>
					<CardTitle className="text-2xl sm:text-3xl">
						{current.title}
					</CardTitle>
					<CardDescription className="text-base mt-3">
						{current.description}
					</CardDescription>
				</CardHeader>

				<CardContent className="text-center text-muted-foreground text-sm px-8 pb-6">
					{current.extra}
				</CardContent>

				<CardFooter className="flex flex-col gap-4 px-8 pb-8">
					<Button asChild size="lg" className="w-full gap-2">
						<Link href={current.actionHref}>
							{current.actionText}
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>

					<Button
						variant="ghost"
						size="sm"
						asChild
						className="text-muted-foreground"
					>
						<Link href="/">Вернуться на главную</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
