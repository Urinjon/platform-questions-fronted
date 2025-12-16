import { SidebarProvider, SidebarTrigger } from "@shared/ui/sidebar";
import { AppSidebar } from "@shared/widgets/AppSidebar";



export default function UserPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            
            
            <SidebarTrigger className="fixed top-1 left-1" />
            
            <main>
                {children}
            </main>
        </SidebarProvider>
    );
}