"use client";

import LargestRefund from "../components/LargestRefund";
import StarRating from "../components/StarRating";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CombinedFooter from "../components/CombinedFooter";
import ProgressBar from "../components/ProgressBar";
import SecondaryTitle from "../components/SecondaryTitle";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    surname: "",
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("personalInfo", JSON.stringify(formData));

    router.push("/Q5");
  };

  return (
    <div>
      <ProgressBar percentage="40%" />
      <div className="p-6  bg-[#FAFAFA]">
        <p className="text-sm font-bold ">Let's get to know you more...</p>

        <SecondaryTitle> What's your name and date of birth?</SecondaryTitle>
        <p className="text-sm pb-4 ">We need this for anti-fraud purposes.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto  ">
          <div className="mb-4">
            <label htmlFor="title" className="block  text-lg  mb-2">
              Title
            </label>
            <select
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className=" p-2 px-5 border-[1px] border-solid border-[#1C1C1C] "
            >
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block  text-sm mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border-[1px]  border-solid border-[#1C1C1C] "
              placeholder=""
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="surname" className="block  text-sm  mb-2">
              Surname
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full p-2 border-[1px] border-solid border-[#1C1C1C] "
              placeholder=""
              required
            />
          </div>

          <div className="mb-4">
            <label className="block  text-sm mb-2">Date of Birth</label>
            <div className="flex space-x-2 pb-6">
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-1/3 p-2 border-[1px]  border-solid border-[#1C1C1C] "
                required
              >
                <option value="">DD</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-1/3 p-2 border-[1px] border-solid border-[#1C1C1C] "
                required
              >
                <option value="">MM</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-1/3 p-2 border-[1px] border-solid border-[#1C1C1C] "
                required
              >
                <option value="">YYYY</option>
                {Array.from(
                  { length: 100 },
                  (_, i) => new Date().getFullYear() - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button type="submit">Next</Button>
        </form>
        <LargestRefund />
        <StarRating />
      </div>
      <CombinedFooter />
    </div>
  );
}
