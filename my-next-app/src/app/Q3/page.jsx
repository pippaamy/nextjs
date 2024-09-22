"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CombinedFooter from "../components/CombinedFooter";

export default function Home() {
  const router = useRouter();
  const [postcode, setPostcode] = useState("");
  const [isValidPostcode, setIsValidPostcode] = useState(false);
  const [error, setError] = useState(false);
  const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidPostcode) {
      setError(true);
    } else {
      router.push("/Q4");
    }
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);

    const isValid = postcodeRegex.test(event.target.value);
    setIsValidPostcode(isValid);
  };

  return (
    <div>
      <div className="w-full bg-[#4376BE]  h-6 ">
        <div className=" bg-[#3EBE5A] h-6 " style={{ width: "30%" }}></div>
      </div>
      <div className="p-6 bg-[#FAFAFA] pb-32">
        <p className="text-sm font-bold ">Thanks for that...</p>
        <h2 className=" text-2xl font-bold pb-4 ">
          Now, let's find your address
        </h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="default-search" className="mb-2 text-lg ">
            Address Lookup
          </label>

          <div className=" flex pt-2 ">
            <input
              required
              type="search"
              id="default-search"
              className="p-2 px-5 text-sm text-gray-900 border border-[#1C1C1C] text-left  "
              placeholder="Enter your postcode"
              value={postcode}
              onChange={handlePostcodeChange}
            />

            <button
              type="submit"
              className="text-white bg-[#4376BE] hover:bg-blue-800  focus:ring-blue-300 font-medium  text-sm px-12 py-2 flex items-center "
            >
              <IoIosSearch className="mr-2" /> SEARCH
            </button>
          </div>
        </form>
        {error ? (
          <p className="text-sm font-bold "> Please enter a valid postcode</p>
        ) : null}
        <LargestRefund />
        <StarRating />
      </div>
      <CombinedFooter />
    </div>
  );
}
