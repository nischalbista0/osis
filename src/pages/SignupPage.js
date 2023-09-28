import React, { useState } from "react";
import SideImage from "../assets/images/e78402a0d645c32e2f21069bb9543406.jpg";
import BrandLogo from "../assets/images/osis.png";
import BusinessAccountForm from "../components/Forms/BusinessAccountForm"; // Assuming you have a BusinessAccountForm component
import PersonalAccountForm from "../components/Forms/PersonalAccountForm";
import RadioButton from "../components/common/RadioButton";

const SignupPage = () => {
  const [selectedAccountType, setSelectedAccountType] = useState("personal");

  return (
    <div className="w-full md:flex">
      <div className="p-6 md:w-[50%] lg:py-8 lg:px-[4%]">
        <div className="flex items-center gap-4 mb-6">
          <img src={BrandLogo} alt="" className="w-10" />
          <p className="text-2xl font-bold text-blue">Osis</p>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-center text-gray-900 text-2xl font-bold">
            Create your account
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16">
              <RadioButton
                id="personal"
                name="accountType"
                label="Personal account"
                defaultChecked={selectedAccountType === "personal"}
                onChange={() => setSelectedAccountType("personal")}
              />

              <RadioButton
                id="business"
                name="accountType"
                label="Business account"
                defaultChecked={selectedAccountType === "business"}
                onChange={() => setSelectedAccountType("business")}
              />
            </div>

            {selectedAccountType === "personal" && <PersonalAccountForm />}
            {selectedAccountType === "business" && <BusinessAccountForm />}
          </div>
        </div>
      </div>

      <div className="hidden md:block md:fixed w-[50%] h-screen right-0 top-0">
        <img
          src={SideImage}
          alt=""
          className="min-w-full min-h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignupPage;
