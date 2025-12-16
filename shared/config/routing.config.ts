import { Home, Inbox, Settings } from "lucide-react";


export const SideBarLinks = [
  {
    title: "Главная",
    url: "/",
    icon: Home,
  },
  {
    title: "Вопросы",
    url: "/student/questions",
    icon: Inbox,
  },
  {
    title: "Настройки",
    url: "/settings",
    icon: Settings,
  },
]



export const NavMainLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Вопросы",
    href: "/student/questions",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Настройки",
    href: "/settings",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Профиль",
    href: "/student",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]