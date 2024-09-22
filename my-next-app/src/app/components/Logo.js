import React from "react";

import Image from "next/image";
import logo from "../../../public/images/fullLogo.png";
const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="PCP logo" width={87} height={16} />
    </div>
  );
};

export default Logo;
