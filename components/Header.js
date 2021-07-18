import Image from "next/image";

// Custom Components
import HeaderIcon from "./HeaderIcon";

// Icons
import { SearchIcon, HomeIcon, UserGroupIcon, BellIcon } from "@heroicons/react/solid";
import { FlagIcon, ShoppingCartIcon, PlayIcon } from "@heroicons/react/outline";

// images
import facebookLogo from "../public/fb-240.png";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image src={facebookLogo} width={40} height={40} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500 px-2" />
          <input className="hidden md:inline-flex  ml-1 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Middle */}
      <div className="flex justify-center flex-grow ">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="font-semibold pr-3 whitespace-nowrap">Spantheslayer Isnab</p>
      </div>
    </div>
  );
}

export default Header;
