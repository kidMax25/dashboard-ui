import ThemeToggler from "@/components/ThemeToggler";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
    {children}
    <div className="absolute bottom-5 rigth-0"><ThemeToggler/></div>
    </div>
  );
};

export default AuthLayout;
