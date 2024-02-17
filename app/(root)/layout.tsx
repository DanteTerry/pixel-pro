import MobileNav from "@/components/Shared/MobileNav";
import Sidebar from "@/components/Shared/Sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}

export default layout;
