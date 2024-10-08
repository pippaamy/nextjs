"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import tick from "../../../public/images/tick.png";

import CombinedFooter from "../components/CombinedFooter";
import ProgressBar from "../components/ProgressBar";
import SecondaryTitle from "../components/SecondaryTitle";

export default function Home() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const formResult = JSON.parse(localStorage.getItem("personalInfo"));
    const firstName = formResult.firstName;
    setFirstName(firstName);
  }, []);

  return (
    <div className="bg-[#FAFAFA]">
      <ProgressBar percentage="100%" />
      <div className="p-6">
        <SecondaryTitle>Thank you, {firstName}!</SecondaryTitle>
        <p className="pb-4">
          Our specialist team has now received your compensation claim.
        </p>
        <p className="pb-4">
          We will review your information, and one of our advisors will be in
          touch soon to discuss what will happen next.
        </p>

        <SecondaryTitle> Help your close ones claim!</SecondaryTitle>
        <p className="pb-4">
          Your friends and family may have financed a vehicle before 2021.
        </p>

        <div className="space-y-2">
          <button className="w-full px-8 py-3 bg-[#3EBE5A]  text-white text-xl flex items-center justify-center">
            <FaWhatsapp className="absolute left-12 text-3xl" /> Share on
            WhatsApp
          </button>
          <button className="w-full px-8 py-3 bg-[#2964F9]  text-white text-xl flex items-center justify-center ">
            <FaFacebookF className="absolute left-12 text-3xl" /> Share on
            Facebook
          </button>
          <button className="w-full px-8 py-3 bg-[#2582FA]  text-white text-xl flex items-center justify-center ">
            <FaFacebookMessenger className="absolute left-12 text-3xl" />
            Share on Messenger
          </button>
          <button className="w-full px-8 py-3 bg-[#000000]  text-white text-xl flex items-center   justify-center">
            <FaXTwitter className="absolute left-12 text-3xl" /> Share on X
          </button>
        </div>
        <div className="flex items-center space-x-6 pt-6">
          <Image src={tick} alt="lock" width={20} height={20} />
          <p className="pt-4 pb-4">
            95% chance their car finance included lender commission
          </p>
        </div>
        <div className="flex items-center space-x-4 pb-16">
          <Image src={tick} alt="lock" width={20} height={20} />
          <p className="">The average claim value is £4,318.25</p>
        </div>
      </div>
      <CombinedFooter />
    </div>
  );
}
