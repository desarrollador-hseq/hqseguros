import { getServerSession } from "next-auth";
import { NextAuthProvider } from "@/components/providers/nextauth-provider";
import { authOptions } from "@/lib/auth-options";




const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <NextAuthProvider session={session}>
      <div>{children}</div>
    </NextAuthProvider>
  );
};

export default AdminLayout;
