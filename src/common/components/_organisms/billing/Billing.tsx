import { ChangeEvent, useState } from "react";
import { Header, Input } from "../../_molecules";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../footer/Footer";
import { UpArrow } from "../../_atoms";
import Order from "./order/Order";

const Billing = () => {
  const [, setFirstName] = useState("");
  const [, setLastName] = useState("");
  const [, setEmail] = useState(true);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailVaild, setEmailValid] = useState(true);
  const [countryPopup, setCountrypopup] = useState(true);
  const [georgiaSelect, setGeorgiaSelect] = useState(false);
  const [state, setState] = useState(false);
  const [stateName, setStateName] = useState(false);

  const handlePopup = () => {
    setCountrypopup(!countryPopup);
  };
  const handleStateName = () => {
    setStateName(!stateName);
  };
  const handleState = () => {
    setState(!state);
  };
  const handleSelectGeorgia = () => {
    setGeorgiaSelect(!georgiaSelect);
  };
  const handleFirstNameRegex = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFirstName(value);
    const isValid = /^[A-Za-z]+(?:['-][A-Za-z]+)*$/.test(value);
    setFirstNameValid(isValid);
  };
  const handleLastNameRegex = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLastName(value);
    const isValidLastName = /^[A-Za-z]+(?:['\-][A-Za-z]+)?$/.test(value);
    setLastNameValid(isValidLastName);
  };
  const handleEmailRegex = (e: any) => {
    const { value } = e.target;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      value
    );
    setEmailValid(emailRegex);
  };

  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className="flex w-[1250px] m-auto mt-8 mb-20 gap-7">
        <div>
          <h1 className="text-2xl font-medium">Billing Information</h1>
          <div className="flex gap-5">
            <div className="mt-5">
              <p className="text-sm">First name</p>
              <Input
                className="border-[#E6E6E6] px-3 w-[280px] border-2 outline-gray-400 placeholder:text-[#999999] rounded-md mt-2 py-2"
                type="text"
                placeholder="Your first name"
                onChange={handleFirstNameRegex}
              />
              {!firstNameValid && (
                <p className="text-red-500">Please Enter a valid first name</p>
              )}
            </div>
            <div className="mt-5">
              <p className="text-sm">Last name</p>
              <Input
                className="border-[#E6E6E6] w-[280px] border-2 outline-gray-400 placeholder:text-[#999999] rounded-md mt-2 py-2 px-3"
                type="text"
                placeholder="Your last name"
                onChange={handleLastNameRegex}
              />
              {!lastNameValid && (
                <p className="text-red-500">Please Enter a valid last name</p>
              )}
            </div>
            <div className="mt-5">
              <div className="flex gap-1">
                <p className="text-sm">Company Name</p>
                <p className="text-[#999999] text-sm">(optional)</p>
              </div>
              <Input
                className="border-[#E6E6E6] w-[280px] border-2 outline-gray-400 placeholder:text-[#999999] rounded-md mt-2 py-2 px-3"
                type="text"
                placeholder="Company name"
              />
            </div>
          </div>
          <div className="my-4">
            <p className="text-sm">Street Address</p>
            <Input
              className="border-[#E6E6E6] w-full border-2 outline-gray-400 placeholder:text-[#999999] rounded-md mt-2 py-2 placeholder:px-3"
              type="email"
              placeholder="Address"
              onChange={handleEmailRegex}
            />
            {!emailVaild && <p className="text-red-500">Email is incorrect</p>}
          </div>
          <div className="flex gap-5">
            <div>
              <p className="text-sm">Country / Region</p>
              <div className="flex justify-between border-2 rounded-md mt-2 w-[280px] px-4 py-3 items-center">
                {georgiaSelect ? (
                  <p className="text-base text-black">Georgia</p>
                ) : (
                  <p className="text-base text-[#999999]">Select</p>
                )}
                <UpArrow
                  className="cursor-pointer"
                  onClick={handlePopup}
                  width={16}
                  height={16}
                />
              </div>
              {!georgiaSelect && (
                <div className="flex justify-center w-[280px]">
                  {!countryPopup && (
                    <h1
                      onClick={handleSelectGeorgia}
                      className="bg-black text-white px-3 rounded mt-4 cursor-pointer"
                    >
                      Georgia
                    </h1>
                  )}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm">State</p>
              <div className="flex justify-between border-2 rounded-md mt-2 w-[280px] px-4 py-3 items-center">
                {stateName ? (
                  <p className="text-base text-black">Imereti</p>
                ) : (
                  <p className="text-base text-[#999999]">Selects</p>
                )}
                <UpArrow
                  onClick={handleState}
                  className="cursor-pointer"
                  width={16}
                  height={16}
                />
              </div>
              {state && (
                <div className="flex justify-center w-[280px]">
                  {!stateName && (
                    <h1
                      onClick={handleStateName}
                      className="bg-black text-white px-3 rounded mt-4 cursor-pointer"
                    >
                      Imereti
                    </h1>
                  )}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm">Zip Code</p>
              <Input
                className="border-[#E6E6E6] w-[280px] border-2 outline-gray-400 placeholder:text-[#999999] rounded-md mt-2 py-[11px] px-3"
                type="text"
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="flex mt-4 gap-5">
            <div>
              <p className="text-sm">Email</p>
              <Input
                className="border-2 w-[430px] py-[11px] rounded-md outline-gray-400 px-4 mt-2"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <p className="text-sm">Phone</p>
              <Input
                className="border-2 py-[11px] w-[430px] rounded-md outline-gray-400 px-4 mt-2"
                type="text"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="flex gap-1 my-5">
            <Input type="checkbox" />
            <p className="text-[#4D4D4D] text-sm">
              Ship to a different address
            </p>
          </div>
          <hr />
          <div className="mt-8">
            <h1 className="text-[#1A1A1A] font-medium text-2xl">
              Additional Info
            </h1>
            <p className="text-[#1A1A1A] text-sm mt-5">
              Order Notes (Optional)
            </p>
            <div className="h-[100px] border rounded-md mt-3">
              <Input
                className="px-4 py-[14px] outline-none w-full"
                type="text"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </div>
        </div>
        <Order />
      </div>
      <Footer />
    </div>
  );
};

export default Billing;
