"use-client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[55px] p-[10px]">
      <nav className="mx-auto flex w-[90%] max-w-[1300px] items-center">
        <Link className="flex gap-[5px]" href="/">
          <Image
            src={"/logo.svg"}
            alt="Trackit logo"
            height={25}
            width={25}
            priority
          />
          <p className="bg-gradient-to-r from-[#5417D7] via-[#6d50c4] to-[#9b4dff] bg-clip-text text-[24px] font-[700] leading-[28px] text-transparent">
            TrackIt
          </p>
        </Link>
        <Link
          className="md:leading-[28px relative z-[1] ml-auto rounded-[5px] bg-white px-[20px] py-[5px] text-center text-[16px] font-[600] leading-[24px] text-white transition-all ease-in-out before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[100%] before:w-[100%] before:rounded-[5px] before:bg-gradient-to-l before:from-[#5417D7] before:via-[#6d50c4] before:to-[#9b4dff] before:opacity-100 before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-[100%] after:w-[100%] after:rounded-[10px] after:bg-gradient-to-r after:from-[#5417D7] after:via-[#6d50c4] after:to-[#9b4dff] after:opacity-0 after:content-[''] hover:before:opacity-0 hover:after:opacity-100 md:rounded-[10px] md:px-[25px] md:py-[10px] md:text-[20px] md:before:rounded-[10px] md:after:rounded-[10px]"
          href="/sign-in"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
