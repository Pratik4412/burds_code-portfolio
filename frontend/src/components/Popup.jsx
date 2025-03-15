import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Popup = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("http://localhost:8000/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: null });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          category: "",
        });

        setTimeout(() => setIsOpen(false), 2000);
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      {/* <div className="p-6 bg-white rounded m-auto max-w-2xl shadow-[0_0_65px_rgb(33,98,250)]"> */}
      <div className="p-6 bg-gradient-to-t from-[#0055fe6f] to-[#616161bf] rounded m-auto max-w-2xl ">
        <div className="flex items-center justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white  font-semibold text-md "
          >
            <IoClose size={24} />
          </button>
        </div>

        {status.submitted ? (
          <div className="text-white text-center py-8">
            <h2 className="text-xl font-bold mb-2">Thank You!</h2>
            <p>Your form has been submitted successfully.</p>
          </div>
        ) : (
          <div className="flex">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="firstName"
                  className="text-white text-sm font-semibold flex flex-col gap-2"
                >
                  {" "}
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className="border border-[#0055fe] py-1 px-2 rounded outline-none text-black"
                  />
                </label>
                <label
                  htmlFor="lastName"
                  className="text-white text-sm font-semibold flex flex-col gap-2"
                >
                  {" "}
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className="border border-[#0055fe] py-1 px-2 rounded outline-none text-black"
                  />
                </label>
              </div>
              <label
                htmlFor="phone"
                className="text-white text-sm font-semibold flex flex-col gap-2"
              >
                {" "}
                Phone No.
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone No."
                  className="border border-[#0055fe] py-1 px-2 rounded outline-none text-black"
                />
              </label>
              <label
                htmlFor="email"
                className="text-white text-sm font-semibold flex flex-col gap-2"
              >
                {" "}
                Email{" "}
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="infocode@gmail.com"
                  className="border border-[#0055fe] py-1 px-2 rounded outline-none text-black"
                />
              </label>
              <label
                htmlFor=""
                className="text-white text-sm font-semibold flex flex-col gap-2"
              >
                Select a category
                <div className="text-black">
                  <Select
                    onValueChange={handleCategoryChange}
                    value={formData.category}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a category</SelectLabel>
                        <SelectItem value="UI/UX Desing">
                          UI/UX Desing
                        </SelectItem>
                        <SelectItem value="Frontend Development">
                          Frontend Development
                        </SelectItem>
                        <SelectItem value="Backend Development">
                          Backend Development
                        </SelectItem>
                        {/* <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem> */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>{" "}
                </div>
              </label>

              {status.error && (
                <div className="text-red-500 text-sm bg-white p-2 rounded">
                  Error: {status.error}
                </div>
              )}
              <div className=" flex items-center justify-end">
                <button
                  className="py-2 px-4 border border-[#fff] rounded"
                  type="submit"
                  disabled={status.submitting}
                >
                  {status.submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
