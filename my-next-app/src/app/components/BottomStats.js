import Image from "next/image";
import React from "react";
import image from "../../../public/images/image.png";

const BottomStats = () => {
  return (
    <div className=" bg-[#FFFFFF] p-6">
      <ul className="text-[#2F3047] font-sans space-y-6 text-base">
        <li className="flex items-start space-x-4">
          <Image src={image} alt="blue shield" width={28} height={28} />
          <p className=""> You could claim back £1000s</p>
        </li>
        <li className="flex items-start space-x-4">
          <Image src={image} alt="blue shield" width={28} height={28} />
          <p> Your claim is no-win, no-fee</p>
        </li>
        <li className="flex items-start space-x-4">
          <Image src={image} alt="blue shield" width={28} height={28} />
          <p>Expert advisers will do all the work for you</p>
        </li>
      </ul>
    </div>
  );
};

export default BottomStats;
