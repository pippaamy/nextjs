import React from "react";

import Image from "next/image";
import SecureLogo from "./SecureLogo";
import logo from "../../../public/images/solicitorsLogo.png";
import Logo from "./Logo";

const PageOneFooter = () => {
  return (
    <div
      className="bg-[#0F1A26]
    text-[#FAFAFA] py-8 p-6 "
    >
      <div className="flex justify-between pb-12 items-center">
        <Logo />
        <SecureLogo />
        <Image src={logo} alt="logo for solicitors" width={66} height={35} />
      </div>
      <p className=" text-[10px] pb-5 text-[#FAFAFA]">
        Your PCP Rebate is a trading style of Courmacs Legal Limited. Courmacs
        Legal Limited is a law firm authorised and regulated by the Solicitors
        Regulation Authority (Reg No: 819044) and Information Solicitors Office
        (ICO REg No: ZB558466). Company Number: 13185687 Registered OfficeL
        Alexander House, Beehive Trading Park, Haslingden Road, Blackburn, BB1
        2EE
      </p>
      <p className="pb-5 text-[10px]">
        <span className="font-bold text-white">*£5,318.25</span> is our average
        claim value as of 29/05/2024 <br />
        <span className="font-bold text-white"> *£10,446.46</span> is our
        largest claim value as of 29/05/2024
      </p>
      <p className="pb-16 text-[10px]">
        **This information has been sourced from the findings of the Financial
        Conduct Authority's (FCA) comprehensive review of the motor finace
        sector.
      </p>
      <div className="border-t border-gray-600 pt-6">
        <div className="flex justify-between  underline pb-10 pt-8  text-[10px]">
          <a> Terms and Conditions</a>
          <a> Complaints Policy</a>
          <a> Privacy & Cookies </a>
        </div>
        <a className=" underline pb-3 text-[10px]">
          Read about more pcp claims
        </a>
      </div>
    </div>
  );
};

export default PageOneFooter;
