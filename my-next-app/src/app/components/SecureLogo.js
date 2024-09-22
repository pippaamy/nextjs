import Image from "next/image";
import React from "react";
import lock from "../../../public/images/SecureFullLogo.png";
const SecureLogo = () => {
  return (
    <div>
      <Image src={lock} alt="lock SSL encryption logo" width={82} height={20} />
    </div>
  );
};

export default SecureLogo;
