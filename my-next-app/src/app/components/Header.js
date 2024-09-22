import React from "react";
import SecureLogo from "./SecureLogo";
import Logo from "./Logo";
import UnionJackLogo from "./UnionJackLogo";

const Header = () => {
  return (
    <header
      className="bg-[#0F1A26]
    px-6 p-4 "
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-6 ">
          <UnionJackLogo />
          <SecureLogo />
        </div>
      </div>
    </header>
  );
};

export default Header;
