import { FiSearch } from "react-icons/fi";
import { Input } from "../ui/input";

const Searchbar = () => {
  return (
    <>
      <div>
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
    </>
  );
};

export default Searchbar;
