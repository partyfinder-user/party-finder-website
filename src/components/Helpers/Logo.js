import React from "react";

import Link from "next/link";
import Image from "next/image";

import ImgLogo from "/public/images/logo.svg";

const Logo = () => {
  return (
    <div className="min-h-[35px] md:flex lg:flex items-center">
      <Link href="/">
        <span className="sr-only">PartyFinder</span>
        <Image src={ImgLogo} alt="www.partyfinder.it" width={48} height={48} />
      </Link>
    </div>
  );
};

export default Logo;
