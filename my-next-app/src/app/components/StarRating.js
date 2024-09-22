import React from "react";
import stars from "../../../public/images/stars.png";
import Image from "next/image";
const StarRating = () => {
  return (
    <div className="pb-32">
      <Image src={stars} alt="star rating" width={115} height={46} />
    </div>
  );
};

export default StarRating;
