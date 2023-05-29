import React from "react";
import OptionMenu from "./OptionMenu";
import { useState } from "react";
import { MdPets, MdCleaningServices } from "react-icons/md";
import { AiFillWindows, AiOutlineCalendar } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExtrasButtons = ({ selectedExtras, handleExtrasClick }) => {
  const extrasdata = [
    { name: "Pets", icon: MdPets },
    { name: "Carpet Cleaning", icon: MdCleaningServices },
    { name: "Window Cleaning", icon: AiFillWindows },
    { name: "Inside Fridge", icon: MdPets },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center my-4">
      {extrasdata.map((item, index) => (
        <button
          key={index}
          onClick={() => handleExtrasClick(item)}
          className={`px-2 py-2 flex flex-col items-center rounded-lg ${
            selectedExtras.find((selected) => selected.name === item.name)
              ? "bg-indigo-500 text-white border border-transparent"
              : "bg-slate-100 shadow-sm drop-shadow-sm border border-slate-500/50 text-gray-700"
          }`}
        >
          <item.icon className="text-4xl" />
          <p className="text-sm mt-2">{item.name}</p>
        </button>
      ))}
    </div>
  );
};

const FrequencyButtons = ({ selectedFrequency, handleFrequencyClick }) => {
  const frequencydata = [
    { name: "One Time" },
    { name: "Weekly" },
    { name: "Bi-Weekly" },
    { name: "Monthly" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 my-5">
      {frequencydata.map((frequency, index) => (
        <button
          key={index}
          onClick={() => handleFrequencyClick(frequency)}
          className={`px-3 py-1.5 rounded flex-grow font-clash text-base font-[550] ${
            selectedFrequency && selectedFrequency.name === frequency.name
              ? "bg-indigo-500 text-white"
              : "bg-slate-100 shadow-sm drop-shadow-sm border border-slate-500/50 text-gray-700"
          }`}
        >
          {frequency.name}
        </button>
      ))}
    </div>
  );
};

function Checkout() {
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const handleButtonClick = () => {
    toast.success("Booking Saved Successfully");
  };

  const handleExtrasClick = (item) => {
    const isSelected = selectedExtras.find(
      (selected) => selected.name === item.name
    );
    if (isSelected) {
      setSelectedExtras(
        selectedExtras.filter((selected) => selected.name !== item.name)
      );
    } else {
      setSelectedExtras([...selectedExtras, item]);
    }
  };

  const handleFrequencyClick = (frequency) => {
    if (selectedFrequency && selectedFrequency.name === frequency.name) {
      setSelectedFrequency(null);
    } else {
      setSelectedFrequency(frequency);
    }
  };

  const serviceOptions = [
    { name: "Hourly" },
    { name: "Standard Cleaning" },
    { name: "Deep Cleaning" },
    { name: "Airbnb" },
  ];

  const servicehours = [
    { name: "1 Hour" },
    { name: "2 Hours" },
    { name: "3 Hours" },
    { name: "4 Hours" },
  ];

  const serviceMins = [
    { name: "5 Mins" },
    { name: "10 Mins" },
    { name: "15 Mins" },
    { name: "20 Mins" },
  ];

  const bedroomsdata = [
    { name: "1 Bedroom" },
    { name: "2 Bedrooms" },
    { name: "3 Bedrooms" },
    { name: "4 Bedrooms" },
  ];

  const bathroomsdata = [
    { name: "1 Bathroom" },
    { name: "2 Bathrooms" },
    { name: "3 Bathrooms" },
    { name: "4 Bathrooms" },
  ];

  const squarefootage = [
    { name: "500 Sq Ft" },
    { name: "1000 Sq Ft" },
    { name: "1500 Sq Ft" },
    { name: "2000 Sq Ft" },
  ];
  const FormInputs = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };

    return (
      <div className="grid lg:grid-cols-2 gap-4 mt-3.5">
        <div>
          <label
            htmlFor="firstname"
            className="text-sm text-slate-700 font-bold"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40"
            placeholder="Ex: James"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="firstname"
            className="text-sm text-slate-700 font-bold"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40"
            placeholder="Ex: Smith"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="firstname"
            className="text-sm text-slate-700 font-bold"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40"
            placeholder="Ex: example@xyz.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="firstname"
            className="text-sm text-slate-700 font-bold"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40"
            placeholder="Ex: 123-456-7890"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
      </div>
    );
  };

  return (
    <div className="lg:flex space-y-5 lg:space-y-0 lg:space-x-5">
      <div className="left-form-part lg:w-2/3 px-7 py-5 rounded-lg">
        <div className="form-part">
          <div className="form-part-header">
            <h3 className="text-2xl font-clash font-[580] text-slate-800">
              Service Type
            </h3>
            <p className="text-sm my-1 text-slate-500/80">
              Please check out our{" "}
              <span className="text-indigo-500 font-clash font-[600] underline decoration-dashed decoration-1 decoration-indigo-300/50 underline-offset-4">
                SERVICE CHECKLIST
              </span>{" "}
              prior to booking.
            </p>
          </div>
          <div className="mt-3">
            <label
              htmlFor="bedroom"
              className="text-sm text-slate-500/70 font-extrabold"
            >
              Services
            </label>
            <OptionMenu serviceOptions={serviceOptions} />
          </div>
          <div className="mt-3 grid md:grid-cols-2 gap-3.5 items-center">
            <div className="w-full">
              <OptionMenu serviceOptions={servicehours} />
            </div>
            <div className="w-full">
              <OptionMenu serviceOptions={serviceMins} />
            </div>
          </div>
          <hr className="my-6 bg-slate-200/50 h-[1px] border-none" />
          <div className="form-part-header">
            <h3 className="text-2xl font-clash font-[580] text-slate-800">
              Service
            </h3>
            <p className="text-sm my-1 text-slate-500/80">
              Total square feet Includes all the applicable cleaning areas
              (Living room, kitchen, dinning, laundary room, den). More than
              4000 Square Feet? Please call{" "}
              <span className="text-indigo-500 font-clash font-[600] underline decoration-dashed decoration-1 decoration-indigo-300/50 underline-offset-4">
                (778) 786-8282
              </span>{" "}
              or{" "}
              <span className="text-indigo-500 font-clash font-[600] underline decoration-dashed decoration-1 decoration-indigo-300/50 underline-offset-4">
                Email{" "}
              </span>
              us for a custom quote.
            </p>
          </div>
          <div className="mt-5 grid md:grid-cols-3 gap-3 items-center">
            <div>
              <label
                htmlFor="bedroom"
                className="text-sm text-slate-500/70 font-extrabold"
              >
                Bedrooms
              </label>
              <OptionMenu serviceOptions={bedroomsdata} />
            </div>
            <div>
              <label
                htmlFor="bedroom"
                className="text-sm text-slate-500/70 font-extrabold"
              >
                Bathrooms
              </label>
              <OptionMenu serviceOptions={bathroomsdata} />
            </div>
            <div>
              <label
                htmlFor="bedroom"
                className="text-sm text-slate-500/70 font-extrabold"
              >
                Sq. Fts.
              </label>
              <OptionMenu serviceOptions={squarefootage} />
            </div>
          </div>
          <hr className="my-6 bg-slate-200/50 h-[1px] border-none" />
          <div className="form-part-header">
            <h3 className="text-2xl font-clash font-[580] text-slate-800">
              Frequency
            </h3>
            <div>
              <FrequencyButtons
                selectedFrequency={selectedFrequency}
                handleFrequencyClick={handleFrequencyClick}
              />
            </div>
          </div>
          <hr className="my-6 bg-slate-200/50 h-[1px] border-none" />
          <div className="form-part-header">
            <h3 className="text-2xl font-clash font-[580] text-slate-800">
              Service Date & Time
            </h3>
            <p className="text-sm my-1 text-slate-500/80">
              Booking will always have a 2 hour arrival window.
            </p>
            <div className="mt-5 text-sm text-slate-600/80 font-extrabold border w-fit px-3.5 py-2 rounded-lg focus:outline-none">
              <input type="date" className="focus:outline-none" />
            </div>
          </div>

          <hr className="my-6 bg-slate-200/50 h-[1px] border-none" />
          <div className="form-part-header">
            <h3 className="text-2xl font-clash font-[580] text-slate-800">
              Select Extras
            </h3>
            <p className="text-sm my-1 text-slate-500/80">
              If you have extras, you can set them up here and charge a price
              for them or not. You can turn this description off or modify it at
              anytime.
            </p>
            <div>
              <ExtrasButtons
                selectedExtras={selectedExtras}
                handleExtrasClick={handleExtrasClick}
              />
            </div>
          </div>
          <hr className="my-6 bg-slate-200/50 h-[1px] border-none" />
          <div className="form-part-header">
            <h3 className="text-2xl font-clash font-[580] text-slate-800">
              Select Extras
            </h3>
            <p className="text-sm my-1 text-slate-500/80">
              If you have extras, you can set them up here and charge a price
              for them or not. You can turn this description off or modify it at
              anytime.
            </p>
            <div>
              <FormInputs />
            </div>
          </div>
          <hr className="my-6 bg-slate-200/50 h-[1px] border-none" />
          <div className="form-part-header">
            <h3 className="text-2xl font-clash font-[580] text-slate-800">
              Special Notes & Instructions
            </h3>
            <p className="text-sm my-1 text-slate-500/80">
              Would you like to add any special notes?
            </p>
            <textarea
              className="w-full bg-slate-100 mt-5 rounded-lg p-3 text-sm text-slate-600 placeholder-slate-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              name=""
              id=""
              rows="5"
              placeholder="Special notes or Instruction 👋"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className=" flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black px-8 py-2 text-white w-full rounded-md mt-2 "
          onClick={handleButtonClick}
        >
          <AiOutlineCalendar className="inline-block mr-2" />
          Save Booking.
        </button>
      </div>
      <div className="right-form-part lg:w-1/3 h-fit px-5 py-3.5 rounded-lg">
        <h3 className="font-clash font-[520]">Booking Summary</h3>
        <div className="mt-5 flex flex-col gap-y-2">
          <div className="flex item' justify-between">
            <p className="text-slate-500/80">Industry</p>
            <p className="text-base text-slate-600">Home Cleaning</p>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <p className="text-slate-500/80">Frequency</p>
            {selectedFrequency ? (
              <p className="text-base text-slate-600">
                {selectedFrequency.name}
              </p>
            ) : (
              <p className="text-base text-slate-600">No Frequency</p>
            )}
          </div>

          <div className="flex items-center justify-between space-x-3">
            <p className="text-slate-500/80">Extras</p>
            {selectedExtras.length > 0 ? (
              <ul className="text-base text-slate-600">
                {selectedExtras.map((extra) => (
                  <li key={extra.name}>{extra.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-base text-slate-600">No Extras</p>
            )}
          </div>
          <hr className="my-2 bg-slate-200/50 h-[1px] border-none" />
          <div className="flex item' justify-between">
            <p className="text-indigo-600 font-bold text-xl">Total</p>
            <p className="text-2xl font-bold text-indigo-600">$600</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
