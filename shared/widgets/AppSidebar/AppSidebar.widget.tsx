

import {
  Sidebar,
  SidebarTrigger,
} from "@shared/ui/sidebar"
import { AppSidebarFooter } from "./footer.ui"
import { AppSidebarContent } from "./content.ui"



export function AppSidebar() {
 
  return (
    <Sidebar>
      <SidebarTrigger />
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  )
}