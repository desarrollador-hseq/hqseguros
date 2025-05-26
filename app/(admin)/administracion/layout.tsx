import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") {
    return redirect("/auth/login");
  }
  return <div>{children}</div>;
};

export default AdminLayout;
