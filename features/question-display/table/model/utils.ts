import { format, isPast, isToday, isTomorrow } from "date-fns";
import { ru } from "date-fns/locale";

export function getDeadlineLabel(date: Date) {
	if (isPast(date)) return "Просрочен";
	if (isToday(date)) return "Сегодня";
	if (isTomorrow(date)) return "Завтра";
	return format(date, "d MMM", { locale: ru });
}

export function getDeadlineColorClass(date: Date) {
	if (isPast(date)) return "text-destructive";
	if (isToday(date) || isTomorrow(date))
		return "text-orange-600 dark:text-orange-400";
	return "text-muted-foreground";
}

