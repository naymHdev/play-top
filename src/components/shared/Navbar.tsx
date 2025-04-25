import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PTContainer from "../ui/PTContainer";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className=" py-6">
        <PTContainer>
          <div className=" flex items-center justify-between">
            <div>
              <h1 className=" text-3xl font-bold text-primary">Logo</h1>
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
              <Link href="#">
                <Button className="w-[179px] h-[48px] rounded-full bg-secondary text-primary font-medium flex items-center gap-1">
                  Submit Game
                  <FaPlus className=" ml-2" />
                </Button>
              </Link>
              <Link href="/profile">
                <Button className="w-[140px] h-[48px] bg-card font-medium text-primary rounded-full flex items-center gap-2">
                  <FaRegUser /> Sign In
                </Button>
              </Link>
            </div>
          </div>
        </PTContainer>
      </div>
    </>
  );
};

export default Navbar;
