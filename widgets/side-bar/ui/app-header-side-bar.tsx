import { Logo } from "@shared/ui/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ui-kit/ui/dropdown-menu";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@ui-kit/ui/sidebar";

export const AppHeaderSideBar: React.FC = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <Logo />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
