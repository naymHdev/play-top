"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import MobileNavbar from "@/components/shared/MobileNavbar";
import Footer from "@/components/shared/Footer";
import { TUserProps } from "@/types/user";

export default function LayoutWrapper({
  children, session
}: {
  children: React.ReactNode;
  session: TUserProps
}) {
  const pathname = usePathname();
  const isAuthPage = ["/sign-in", "/sign-up"].includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && (
        <>
          <div className="hidden md:block">
            <Navbar session={session} />
          </div>
          <div className="block md:hidden">
            <MobileNavbar />
          </div>
        </>
      )}

      {children}

      {!isAuthPage && <Footer />}
    </div>
  );
}
