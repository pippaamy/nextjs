"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CombinedFooter from "../components/CombinedFooter";
import { FaCamera } from "react-icons/fa";
import passport from "../../../public/images/passport.png";
import Image from "next/image";

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
      <div className="w-full bg-[#4376BE]  h-6 ">
        <div className=" bg-[#3EBE5A] h-6 " style={{ width: "80%" }}></div>
      </div>
      <div className="bg-[#FAFAFA] p-6">
        <h2 className=" text-2xl font-bold pb-4 ">Last step, {firstName}!</h2>
        <p>
          We just need you to upload your Driving License (ID) here. (Maximum
          4.5MB file size)
        </p>
        <h2 className=" pt-4 text-2xl font-bold pb-4  ">Upload ID</h2>
        <p className="pb-3  ">Note: you can also use a passport</p>
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
            <input type="file" className="hidden" onChange={handleChange} />
          </label>

          <div className="space-y-6">
            <button className="w-full px-8 py-3 bg-white  text-[#4A71C2]  border-[1px]  border-solid border-[#1C1C1C] flex items-center justify-center text-sm">
              <FaCamera className="mr-2" />
              Take a photo
            </button>
            <button
              onClick={handleClick}
              type="submit"
              className="w-full px-8 py-3 bg-[#3EBE5A]  text-white text-xl border-[1px] border-b-4 border-solid border-[#1C1C1C]"
            >
              Submit
            </button>
          </div>
        </div>
        <LargestRefund />
        <StarRating />
        <CombinedFooter />
      </div>
    </div>
  );
}
