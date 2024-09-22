"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CombinedFooter from "../components/CombinedFooter";
import NextWarning from "../components/NextWarning";

export default function Home() {
  const router = useRouter();
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [numError, setNumError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const numberRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

  const handleNumberChange = (event) => {
    setNumber(event.target.value);

    const isValid = numberRegex.test(event.target.value);
    setIsValidNumber(isValid);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    const isValid = emailRegex.test(event.target.value);

    setIsValidEmail(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidNumber) {
      setNumError(true);
    } else if (!isValidEmail) {
      setEmailError(true);
    } else {
      router.push("/Q6");
    }
  };
  return (
    <div className="bg-[#FAFAFA]">
      <div className="w-full bg-[#4376BE]  h-6 ">
        <div className=" bg-[#3EBE5A] h-6 " style={{ width: "50%" }}></div>
      </div>
      <div className="p-6">
        <p className="text-sm font-bold  ">Perfect!</p>
        <h2 className=" text-2xl font-bold pb-4  ">
          Now let's enter your phone number
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900"
          >
            Mobile Number
          </label>
          <p className="text-xs pb-2 ">
            We need this so we can keep you updated on your claim with text
            messages
          </p>
          <input
            type="tel"
            placeholder=""
            className=" w-full p-3 ps-10 text-sm text-gray-900 border border-[#1C1C1C]  "
            value={number}
            onChange={handleNumberChange}
          />
          {numError ? (
            <p className="text-sm font-bold  "> Please enter a valid number</p>
          ) : null}
          <p className="text-sm font-bold pt-6 ">
            It's good to have two points of contact...
          </p>
          <h2 className=" text-2xl font-bold pb-4  ">
            What's your email address?
          </h2>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 "
          >
            Your Email Address
          </label>
          <p className="text-xs pb-2 ">
            We need this so we can keep you updated on your claim by email
          </p>
          <div className="space-y-8">
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={handleEmailChange}
              className=" w-full p-3 ps-10 text-sm text-gray-900 border border-[#1C1C1C]  "
            />
            {emailError ? (
              <p className="text-sm font-bold "> Please enter a valid email</p>
            ) : null}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#3EBE5A]  text-white text-xl border-[1px] border-b-4 border-solid border-[#1C1C1C]"
            >
              Next
            </button>
          </div>
        </form>
        <LargestRefund />
        <NextWarning />
        <StarRating />
      </div>
      <CombinedFooter />
    </div>
  );
}
