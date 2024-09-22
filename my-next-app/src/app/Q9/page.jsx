"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CombinedFooter from "../components/CombinedFooter";

export default function Home() {
  const router = useRouter();
  const registrationRegex = /^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$/;

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
      <div className="w-full bg-[#4376BE]  h-6 ">
        <div className=" bg-[#3EBE5A] h-6 " style={{ width: "90%" }}></div>
      </div>
      <div className="p-6">
        <h2 className=" text-2xl font-bold pb-4 ] ">
          One more thing! Details for your lender(s) & vehicle(s)
        </h2>
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
                <p className="p-3">Enter a valid registration </p>
              ) : null}
            </div>

            <div className="bg-[#FAFAFA] p-6"></div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#3EBE5A]  text-white text-xl border-[1px] border-b-4 border-solid border-[#1C1C1C]"
            >
              Submit
            </button>
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
