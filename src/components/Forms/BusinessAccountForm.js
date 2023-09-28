import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const BusinessAccountForm = () => {
  return (
    <form
      action=""
      className="self-start w-full flex flex-col items-start gap-10 lg:px-[10%]"
    >
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col items-start gap-1.5">
          <label
            htmlFor="phoneNum"
            className="text-[14px] uppercase text-gray-800 font-bold"
          >
            Phone Number
          </label>

          <div className="w-full border border-gray-400 rounded-lg flex">
            <div className="w-16 bg-[#F3F3F6] text-center text-gray-500 text-[14px] font-medium rounded-tl-lg rounded-bl-lg py-2">
              +977
            </div>

            <input
              type="text"
              placeholder="9852545652"
              className="outline-none w-full rounded-tr-lg rounded-br-lg px-4 py-2 text-[14px] font-medium placeholder:text-gray-300 placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" className="w-3.5 h-3.5" />
          <label htmlFor="" className="text-gray-500 text-[14px]">
            I agree to terms & conditions and privacy policy.
          </label>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 items-center">
        <PrimaryButton onClick={() => {}} label="Sign up" />

        <div className="flex text-[14px] text-gray-900 items-center gap-2 self-center">
          <p>Already have an account?</p>
          <button className="font-semibold">Login</button>
        </div>
      </div>
    </form>
  );
};

export default BusinessAccountForm;
