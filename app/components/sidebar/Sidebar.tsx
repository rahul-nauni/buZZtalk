import DesktopSidebar from "./DesktopSidebar";

async function Sidebar({children}:{
    children: React.ReactNode;
    
}) {
    return (
        <div className="h-full">
            <DesktopSidebar />
            <main className="lg:pl-40 h-screen">
            {children}
            </main>
        </div>
    );
}

export default Sidebar;