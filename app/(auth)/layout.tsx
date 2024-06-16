import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="'h-[100vh] flex items-center justify-center relative">
    {children}
    </div>
  );
};

export default AuthLayout;
