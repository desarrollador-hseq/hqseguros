import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";



const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions);
    if (session && session?.user?.role === "ADMIN") {
    //   return redirect("/administracion");
    }
    return <div>{children}</div>;
  };
  
  export default AuthLayout;
  