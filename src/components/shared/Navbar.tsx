import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PTContainer from "../ui/PTContainer";
import { FaPlus, FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const activeUser = false;

  return (
    <>
      <div className="py-6">
        <PTContainer>
          <div className=" flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <h1 className=" text-3xl font-bold text-primary">Logo</h1>
              </Link>
            </div>
            <div className=" flex gap-4 items-center justify-center">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-4 pr-10 py-2 rounded-full text-primary w-[426px] h-[48px] bg-card border-none"
                />
                <FiSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary opacity-70"
                  size={18}
                />
              </div>
              <Link href="/submit-product">
                <Button className="w-[179px] h-[48px] rounded-full bg-secondary hover:bg-green-700 hover:cursor-pointer text-primary font-medium flex items-center gap-1">
                  Submit Game
                  <FaPlus className=" ml-2" />
                </Button>
              </Link>
              {activeUser ? (
                <>
                  <div className="flex items-center gap-4">
                    {/* Notification Icon with Green Dot */}
                    <div className="relative">
                      <div className="rounded-full bg-card p-3 flex items-center justify-center">
                        <IoNotificationsOutline
                          size={24}
                          className="text-primary"
                        />
                      </div>
                      {/* Green Dot */}
                      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
                    </div>

                    {/* Avatar */}
                    <div>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>
                          <FaRegCircleUser />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button className="w-[140px] h-[48px] bg-card font-medium text-primary rounded-full flex items-center gap-2 hover:bg-card hover:cursor-pointer">
                      <FaRegUser /> Sign In
                    </Button>
                  </Link>
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
