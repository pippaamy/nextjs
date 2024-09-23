"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CombinedFooter from "../components/CombinedFooter";
import ProgressBar from "../components/ProgressBar";
import SecondaryTitle from "../components/SecondaryTitle";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();
  const registrationRegex = /^[A-Za-z]{2}[0-9]{2}\s?[A-Za-z]{3}$/;

  const [lender, setLender] = useState("");
  const [registration, setRegistration] = useState("");
  const [registrationError, setRegistrationError] = useState(false);
  const [isValidRegistration, setIsValidRegistration] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidRegistration) {
      setRegistrationError(true);
    } else {
      router.push("/ThankYou");
    }
  };
  useEffect(() => {
    const checkboxesResult = JSON.parse(
      localStorage.getItem("checkBoxResults")
    );

    const additionalResult = JSON.parse(
      localStorage.getItem("additionalCheckBoxResults")
    );

    filterSelectedLenders({ ...checkboxesResult, ...additionalResult });
  }, []);

  const handleRegistrationChange = (event) => {
    setRegistration(event.target.value);
    setRegistrationError(false);
    const isValid = registrationRegex.test(event.target.value);

    setIsValidRegistration(isValid);
  };

  const filterSelectedLenders = (checkboxes) => {
    let lenders = "";
    for (let checkbox in checkboxes) {
      if (checkboxes[checkbox]) {
        lenders += checkbox + ", ";
      }
    }

    setLender(lenders.slice(0, -2));
  };

  return (
    <div className="bg-[#FAFAFA]">
      <ProgressBar percentage="90%" />
      <div className="p-6">
        <SecondaryTitle>
          One more thing! Details for your lender(s) & vehicle(s)
        </SecondaryTitle>
        <p className=" pb-5">
          Please provide details about your finance agreement(s) to help us
          speed up the process
        </p>

        <div className="bg-[#EFEFEF] p-3">
          <h2 className="  text-2xl font-bold border-b border-gray-600 pt-6">
            {lender}
          </h2>
        </div>
        <div className="space-y-12">
          <form onSubmit={handleSubmit}>
            <div className="bg-[#EFEFEF] pb-6 space-y-3">
              <label
                htmlFor="default-search"
                className=" px-3 text-sm font-medium text-gray-900 "
              >
                Enter Registration
              </label>

              <input
                type="Registration"
                placeholder="Enter Registration"
                value={registration}
                onChange={handleRegistrationChange}
                className=" w-full max-w-[95%] p-3  text-sm text-gray-900 border border-[#1C1C1C] ml-2"
              />
              {registrationError ? (
                <p className="p-3">Enter a valid registration</p>
              ) : null}
            </div>

            <div className="bg-[#FAFAFA] p-6"></div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
        <p className=" text-center underline pt-2">Skip this step</p>
        <LargestRefund />
        <StarRating />
      </div>
      <CombinedFooter />
    </div>
  );
}
