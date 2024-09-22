"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CombinedFooter from "../components/CombinedFooter";
import { FaSortDown } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const handleClick = (event) => {
    event.preventDefault();
    localStorage.setItem("checkBoxResults", JSON.stringify(checkboxes));
    router.push("/Q3");
  };
  const dropdownOptions = [
    "Option1",
    "Option2",
    "Option3",
    "Option4",
    "Option5",
    "Option6",
    "Option7",
    "Option8",
    "Option9",
    "Option10",
  ];

  const [checkboxes, setCheckboxes] = useState({
    "Black Horse": false,
    "Close Brothers": false,
    MotoNovo: false,
    Volkswagen: false,
    Option1: false,
    Option2: false,
    Option3: false,
    Option4: false,
    Option5: false,
    Option6: false,
    Option7: false,
    Option8: false,
    Option9: false,
    Option10: false,
  });

  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.value]: event.target.checked,
    });
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="w-full bg-[#4376BE]  h-6 ">
        <div className=" bg-[#3EBE5A] h-6 " style={{ width: "20%" }}></div>
      </div>
      <div className="p-6 pt-8 ">
        <p className="text-sm font-bold ">That's great! Next...</p>
        <h2 className=" text-2xl font-bold pb-4 ">
          Select the lender(s) that you used to finance your vehicle(s):
        </h2>

        <p className="text-sm pb-4 ">
          Please only select lender(s) that did not tell you they would receive
          commission.
        </p>

        <div className=" space-y-2">
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px]  border-solid border-[#1C1C1C] text-left">
            <input
              type="checkbox"
              className="mr-2"
              value="Black Horse"
              checked={checkboxes["Black Horse"]}
              onChange={handleCheckboxChange}
            ></input>{" "}
            Black Horse
          </button>
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px] border-solid border-[#1C1C1C] text-left ">
            <input
              type="checkbox"
              className="mr-2"
              value="Close Brothers"
              onChange={handleCheckboxChange}
              checked={checkboxes["Close Brothers"]}
            ></input>{" "}
            Close Brothers
          </button>
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px] border-solid border-[#1C1C1C] text-left">
            <input
              type="checkbox"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={checkboxes.MotoNovo}
              value="MotoNovo"
            ></input>{" "}
            MotoNovo
          </button>
          <button className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px]  border-solid border-[#1C1C1C] text-left">
            <input
              type="checkbox"
              className="mr-2"
              onChange={handleCheckboxChange}
              value="Volkswagen"
              checked={checkboxes.Volkswagen}
            ></input>{" "}
            Volkswagen
          </button>
          <button
            onClick={toggleHidden}
            className=" w-full flex-1 px-4 py-4 bg-[#4376BE] text-white hover:bg-blue-600 space-y-2 text-left flex"
          >
            See more lenders ({dropdownOptions.length})
            <FaSortDown className="ml-2 pt-1" />
          </button>
          <div className={`${isHidden ? "hidden" : "block"} space-y-2`}>
            {dropdownOptions.map((option) => {
              return (
                <button
                  className="w-full flex-1 px-4 py-2 bg-white text-black border-[1px]  border-solid border-[#1C1C1C] text-left"
                  key={option}
                  value={option}
                  onChange={handleCheckboxChange}
                  checked={checkboxes[option]}
                >
                  <input type="checkbox" className="mr-2"></input> {option}
                </button>
              );
            })}
          </div>
        </div>
        <div className="pt-3">
          <button
            onClick={handleClick}
            className="w-full px-8 py-3 bg-[#3EBE5A]  text-white text-xl border-[1px] border-b-4 border-solid border-[#1C1C1C] "
          >
            Next
          </button>
        </div>
        <LargestRefund />
        <StarRating />
        <CombinedFooter />
      </div>
    </div>
  );
}
