"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import CombinedFooter from "../components/CombinedFooter";
import { FaEraser } from "react-icons/fa6";

export default function Home() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const handleClick = (event) => {
    event.preventDefault();

    router.push("/Q7");
  };

  useEffect(() => {
    const formResult = JSON.parse(localStorage.getItem("personalInfo"));
    const firstName = formResult.firstName;
    setFirstName(firstName);
  }, []);

  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  return (
    <div>
      <div className="w-full bg-[#4376BE]  h-6 ">
        <div className=" bg-[#3EBE5A] h-6 " style={{ width: "60%" }}></div>
      </div>
      <div className="p-6 bg-[#FAFAFA]">
        <p className="pb-2 text-sm font-bold ">Thanks for that, {firstName}!</p>
        <h2 className=" text-2xl font-bold pb-6  ">
          Please sign below to speed things up!
        </h2>
        <p className="border-[1.5px]  border-solid border-[#1C1C1C] p-3 text-xs bg-[#4376BE] text-white text-center border-b-0">
          {" "}
          DRAW SIGNATURE WITH MOUSE ON DESKTOP / FINGER ON MOBILE OR TABLET
        </p>
        <div className="space-y-3">
          <div className="border-[1.5px]  border-solid border-[#1C1C1C] border-t-0">
            <SignatureCanvas
              ref={sigCanvas}
              canvasProps={{
                width: 500,
                height: 200,
                className: "signatureCanvas",
              }}
              penColor="black"
            />
          </div>

          <button
            onClick={clear}
            className="w-full bg-[#111A27] py-2  text-sm text-[#F2F2F2] flex items-center justify-center"
          >
            <FaEraser className="mr-2" /> Reset signature
          </button>
          <button
            className="w-full py-1 bg-[#F7F7F7]  text-[#C4C4C4] text-sm border-2 border-solid border-[#C4C4C4] text-[14px] "
            disabled
          >
            View Courmacs Legal Terms & Conditions here
          </button>
        </div>
        <p className="text-xs pt-4">
          I agree that I have read, understand and accept the Courmacs Legal
          Limited terms of buisness and that the check is free. I also agree to
          instruct Courmacs Legal Limited to send a data subject access request
          (DSAR) to find out if my PCP or HP agreements were mis-sold.
        </p>
        <p className="text-xs pt-6 pb-6">
          By clicking <span className="font-bold">'Submit Claim' </span>
          you agree that we will be conducting a soft credit search to verify
          your claim. These searches won't impact your credit score but will
          support your claim (powered bt Valid8 ip ltd). By signing this
          document, you agree to let us do this. For each claim, we will create
          a new damages-based agreement for you to review.
        </p>
        <button
          onClick={handleClick}
          className="w-full px-8 py-3 bg-[#3EBE5A]  text-white text-xl border-[1px] border-b-4 border-solid border-[#1C1C1C]"
        >
          Submit Claim
        </button>

        <LargestRefund />
        <p className="text-xs  pb-6">
          By clicking 'Submit Claim' you agree to hte Courmacs Legal Privacy
          policy & re-engagement to complete your application.
        </p>
        <StarRating />

        <CombinedFooter />
      </div>
    </div>
  );
}
