"use client";

import UpperFooter from "./components/BottomStats";
import LargestRefund from "./components/LargestRefund";
import StarRating from "./components/StarRating";
import { useRouter } from "next/navigation";
import PageOneFooter from "./components/PageOneFooter";
import ProgressBar from "./components/ProgressBar";
import SecondaryTitle from "./components/SecondaryTitle";

export default function Home() {
  const router = useRouter();
  const handleClick = (event) => {
    event.preventDefault();

    router.push("/Q2");
  };

  return (
    <div>
      <ProgressBar percentage="10%" />
      <div className="p-6 pt-8 bg-[#FAFAFA] ">
        <h3 className="text-lg">
          <span className="font-bold text-[#3EBE5A]">Successful</span> drivers
          could claim up to
          <span className="font-bold text-[#3EBE5A]"> £10,446.46</span> back
          from their lender!
        </h3>
        <p className="text-xs pt-3 pb-6">
          Find out in <span className="font-bold">60 seconds </span>if you
          qualify to claim for a{" "}
          <span className="font-bold">car finance refund</span>
        </p>
        <SecondaryTitle>
          Have you had a car on finance before 2021?
        </SecondaryTitle>

        <div className="flex pt-8  space-x-4">
          <button
            onClick={handleClick}
            className="px-16 py-4 bg-[#3EBE5A] font-bold text-white text-xl border-[1.5px] border-b-4 border-solid border-[#1C1C1C]"
          >
            YES
          </button>
          <button className=" bg-white text-black px-16 py-4  font-bold  text-xl border-[1.5px] border-b-4 border-solid border-[#1C1C1C]">
            No
          </button>
        </div>
        <LargestRefund />
        <StarRating />
      </div>
      <UpperFooter />
      <PageOneFooter />
    </div>
  );
}
