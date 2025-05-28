import Link from "next/link";
import { Button } from "../ui/button";
import PTContainer from "../ui/PTContainer";
import { FaPlus, FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/contexts/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/services/auth";
import { useRouter } from "next/navigation";
import Searchbar from "./Searchbar";
import { TUserProps } from "@/types/user";
import { signOut } from "next-auth/react";
import AuthModal from "../modules/auth/AuthModal";
import logo from "../../assets/logo/header-logo.png";
import Image from "next/image";

const Navbar = ({ session }: { session: TUserProps | null }) => {
  const { user, setIsLoading } = useUser();
  // console.log("userId", user?.id);
  const router = useRouter();
  // console.log(user);

  // console.log("session ", session);

  const handleLogout = async () => {
    await logout();
    await signOut({ callbackUrl: "/" });
    setIsLoading(true);

    router.push("/");
  };

  const SubmitButton = (
    <Button className="w-[150px] h-[40px] rounded-full bg-secondary hover:bg-green-700 hover:cursor-pointer text-primary font-medium flex items-center gap-1">
      Submit Game
      <FaPlus className="ml-2" />
    </Button>
  );

  return (
    <>
      <div className="py-5">
        <PTContainer>
          <div className=" flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <Image src={logo} alt="logo" width={120} height={120} />
              </Link>
            </div>
            <div className=" flex gap-4 items-center justify-center">
              <div className="relative w-full">
                <Searchbar />
              </div>

              {/* // Usage in component render */}
              {session?.user?.email ? (
                <Link href="/submit-product">{SubmitButton}</Link>
              ) : (
                <AuthModal>{SubmitButton}</AuthModal>
              )}
              {(user && user.role === "USER") || session?.user?.email ? (
                <>
                  <div className="flex items-center gap-4">
                    {/* Notification Icon with Green Dot */}
                    {/* <div className="relative">
                      <div className="rounded-full bg-card p-2 flex items-center justify-center">
                        <IoNotificationsOutline
                          size={22}
                          className="text-primary"
                        />
                      </div>
                      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                    </div> */}

                    {/* Avatar */}
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <div className="cursor-pointer">
                            <Avatar>
                              <AvatarImage src={`${session?.user?.image}`} />
                              <AvatarFallback>
                                <FaRegCircleUser />
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          sideOffset={8}
                          className="border-none bg-card text-primary"
                        >
                          <DropdownMenuItem asChild>
                            <Link
                              className=" hover:cursor-pointer"
                              href="/profile"
                            >
                              Profile
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={handleLogout}
                            className="hover:text-red-600 hover:cursor-pointer"
                          >
                            Log out
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <AuthModal
                    children={
                      <Button className="lg:w-[110px] w-28 h-9 lg:h-[40px] bg-card font-medium text-primary rounded-full flex items-center gap-2 hover:bg-card hover:cursor-pointer">
                        <FaRegUser /> Sign In
                      </Button>
                    }
                  />
                </>
              )}
            </div>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default Navbar;
