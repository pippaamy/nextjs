"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CombinedFooter from "../components/CombinedFooter";
import NextWarning from "../components/NextWarning";
import ProgressBar from "../components/ProgressBar";
import SecondaryTitle from "../components/SecondaryTitle";
import Button from "../components/Button";

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
    setNumError(false);
    const isValid = numberRegex.test(event.target.value);
    setIsValidNumber(isValid);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
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
      <ProgressBar percentage="50%" />
      <div className="p-6">
        <p className="text-sm font-bold  ">Perfect!</p>

        <SecondaryTitle>Now let's enter your phone number</SecondaryTitle>
        <form onSubmit={handleSubmit}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium">
            Mobile Number
          </label>
          <p className="text-xs pb-2 ">
            We need this so we can keep you updated on your claim with text
            messages
          </p>
          <input
            type="tel"
            placeholder=""
            className=" w-full p-3 ps-10 text-sm text-[#939393] border border-[#1C1C1C]  "
            value={number}
            onChange={handleNumberChange}
          />
          {numError ? (
            <p className="text-sm font-bold  "> Please enter a valid number</p>
          ) : null}
          <p className="text-sm font-bold pt-6 ">
            It's good to have two points of contact...
          </p>
          <SecondaryTitle> What's your email address? </SecondaryTitle>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium  "
          >
            Your Email Address
          </label>
          <p className="text-xs pb-2 ">
            We need this so we can keep you updated on your claim by email
          </p>

          <input
            type="email"
            placeholder=""
            value={email}
            onChange={handleEmailChange}
            className=" w-full p-3 ps-6 text-sm text-[#939393] border border-[#1C1C1C]  "
          />
          {emailError ? (
            <p className="text-sm font-bold "> Please enter a valid email</p>
          ) : null}
          <div className="pt-16">
            <Button type="submit">Next</Button>
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
