"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CombinedFooter from "../components/CombinedFooter";
import { FaCamera } from "react-icons/fa";
import passport from "../../../public/images/passport.png";
import Image from "next/image";
import ProgressBar from "../components/ProgressBar";
import SecondaryTitle from "../components/SecondaryTitle";
import Button from "../components/Button";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const router = useRouter();
  const handleClick = (event) => {
    event.preventDefault();

    router.push("/Q9");
  };

  useEffect(() => {
    const formResult = JSON.parse(localStorage.getItem("personalInfo"));
    const firstName = formResult.firstName;
    setFirstName(firstName);
  }, []);

  return (
    <div>
      <ProgressBar percentage="80%" />
      <div className="bg-[#FAFAFA] p-6">
        <SecondaryTitle> Last step, {firstName}!</SecondaryTitle>
        <p className="pb-4">
          We just need you to upload your Driving License (ID) here. (Maximum
          4.5MB file size)
        </p>

        <SecondaryTitle>Upload ID</SecondaryTitle>
        <p className="pb-4  ">Note: you can also use a passport</p>
        <div className="space-y-2">
          <label className="w-full px-8 py-3 bg-[#4376BE] text-white border-[1px] border-solid border-[#1C1C1C] text-sm inline-block  text-center  flex justify-center">
            <Image
              src={passport}
              alt="example of a passport"
              width={25}
              height={25}
              className="mr-2"
            />
            Click to upload
            <input type="file" className="hidden" />
          </label>

          <div className="space-y-6">
            <button className="w-full px-8 py-3 bg-white  text-[#4A71C2]  border-[1px]  border-solid border-[#1C1C1C] flex items-center justify-center text-sm">
              <FaCamera className="mr-2" />
              Take a photo
            </button>

            <Button onClick={handleClick}>Submit</Button>
          </div>
        </div>
        <LargestRefund />
        <StarRating />
        <CombinedFooter />
      </div>
    </div>
  );
}
