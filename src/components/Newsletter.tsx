import PTContainer from "./ui/PTContainer";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdOutlineArrowOutward } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="mt-16 bg-secondary py-10">
      <PTContainer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Icon and Text */}
          <div className="flex gap-4 text-left">
            <TfiEmail className="text-black" size={55} />
            <div>
              <h2 className="text-black text-3xl font-bold">Newsletters</h2>
              <p className="text-black opacity-80 text-lg">
                Join Business Name newsletter for latest <br /> news and
                updates!!!
              </p>
            </div>
          </div>

          {/* Right: Input and Button */}
          <div className="flex sm:flex-row items-center gap-2 lg:gap-4 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter Email Address"
              className="w-full text-lg px-2 sm:w-[550px] h-[52px] bg-white text-black border-black"
            />
            <Button className="bg-black text-white hover:bg-gray-800 gap-2 lg:w-[248px] h-[52px]">
              Subscribe <MdOutlineArrowOutward size={18} />
            </Button>
          </div>
        </div>
      </PTContainer>
    </div>
  );
};

export default Newsletter;
