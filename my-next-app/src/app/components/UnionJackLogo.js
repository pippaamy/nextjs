import Image from "next/image";
import React from "react";
import claim from "../../../public/images/unionFullLogo.png";
const UnionJackLogo = () => {
  return (
    <div className="font-works flex ">
      <Image src={claim} alt="union jack logo" width={77} height={21} />
    </div>
  );
};

export default UnionJackLogo;
