import { AppSidebar } from "@/components/app-sidebar";
import EmissionsPage from "@/components/emissionsTable/page";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <EmissionsPage></EmissionsPage>
        </div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  );
}

//         <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4"></header>
// <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
