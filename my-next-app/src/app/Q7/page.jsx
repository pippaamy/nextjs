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
  const [additionalCheckboxes, setAdditionalCheckboxes] = useState({
    "Alphera Financial Services": false,
    "Audi Finance": false,
    BMW: false,
    "BMW Financial Services": false,
  });

  const handleClick = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "additionalCheckBoxResults",
      JSON.stringify(additionalCheckboxes)
    );

    router.push("/Q8");
  };

  const handleCheckboxChange = (event) => {
    setAdditionalCheckboxes({
      ...additionalCheckboxes,
      [event.target.value]: event.target.checked,
    });
  };
  return (
    <div className="bg-[#FAFAFA]">
      <ProgressBar percentage="70%" />
      <div className="p-6">
        <p className="text-sm font-bold">That's now submitted!</p>

        <SecondaryTitle> Are you owed more?</SecondaryTitle>
        <p className="pb-4">
          Check if you've had car finance with any of these popular lenders used
          by our customers.
        </p>

        <SecondaryTitle>Choose your additional lender(s) below:</SecondaryTitle>
        <div className=" space-y-2">
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px]  border-solid border-[#1C1C1C] text-left">
            <input
              type="checkbox"
              className="mr-2"
              checked={additionalCheckboxes["Alphera Financial Services"]}
              onChange={handleCheckboxChange}
              value="Alphera Financial Services"
            ></input>{" "}
            Alphera Financial Services
          </button>
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px]  border-solid border-[#1C1C1C] text-left">
            <input
              type="checkbox"
              className="mr-2"
              checked={additionalCheckboxes["Audi Finance"]}
              onChange={handleCheckboxChange}
              value="Audi Finance"
            ></input>{" "}
            Audi Finance
          </button>
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px]  border-solid border-[#1C1C1C] text-left">
            <input
              type="checkbox"
              className="mr-2"
              checked={additionalCheckboxes["BMW"]}
              onChange={handleCheckboxChange}
              value="BMW"
            ></input>{" "}
            BMW
          </button>
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px]  border-solid border-[#1C1C1C] text-left">
            <input
              type="checkbox"
              className="mr-2"
              checked={additionalCheckboxes["BMW Financial Services"]}
              onChange={handleCheckboxChange}
              value="BMW Financial Services"
            ></input>{" "}
            BMW Financial Services
          </button>
        </div>
        <p className="pt-6 text-xs">
          We will use the signature previously supplied to add to the Damages
          Based Agreement for all the additional lenders selected above
        </p>
        <p className="pt-4 text-xs pb-6">
          (If you don't wish to check any additional lenders, click 'Submit' to
          continue)
        </p>
        <div className="space-y-4">
          <button
            className="w-full py-1 bg-[#F7F7F7]  text-[#C4C4C4] text-sm border-2 border-solid border-[#C4C4C4] text-[14px] "
            disabled
          >
            View Courmacs Legal Terms & Conditions here
          </button>

          <Button onClick={handleClick}>Submit</Button>
        </div>
        <LargestRefund />
        <StarRating />
      </div>
      <CombinedFooter />
    </div>
  );
}
