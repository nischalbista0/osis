import React from "react";
import InputWithLabel from "../common/InputWithLabel";
import PrimaryButton from "../common/PrimaryButton";

const PersonalAccountForm = () => {
  return (
    <form
      action=""
      className="self-start w-full flex flex-col items-start gap-5 lg:px-[10%]"
    >
      <InputWithLabel
        htmlFor="email"
        label="Email or phone number"
        type="text"
        placeholder="Lexialexandra@gmail.com"
      />

      <InputWithLabel
        htmlFor="fullName"
        label="Full Name"
        type="text"
        placeholder="Lexi Alexandra"
      />

      <InputWithLabel
        htmlFor="password"
        label="Create Password"
        type="password"
        placeholder="Helloecommerce"
      />

      <InputWithLabel
        htmlFor="password"
        label="Confirm Password"
        type="password"
        placeholder="Helloecommerce"
      />

      <div className="flex items-center gap-2">
        <input type="checkbox" name="" id="" className="w-3.5 h-3.5" />
        <label htmlFor="" className="text-gray-500 text-[14px]">
          I agree to terms & conditions and privacy policy.
        </label>
      </div>

      <PrimaryButton onClick={() => {}} label="Sign up" />

      <div className="flex text-[14px] text-gray-900 items-center gap-2 self-center">
        <p>Already have an account?</p>
        <button className="font-semibold">Login</button>
      </div>
    </form>
  );
};

export default PersonalAccountForm;
