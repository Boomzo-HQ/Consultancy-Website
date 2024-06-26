import { Facebook, Linkedin, Mail, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start bg-white relative">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#17173f12_1px,transparent_1px),linear-gradient(to_bottom,#17173f12_1px,transparent_1px)] bg-[size:42px_42px] z-10"></div>
      <div className="z-50 w-full px-[8vw] py-20 text-center md:text-left md:w-1/2 md:p-24 flex flex-col gap-y-7">
        <h3 className="text-base font-semibold text-minor uppercase">
          Contact
        </h3>
        <h2 className="text-2xl md:text-4xl text-median font-bold">
          Lets Wrok Together
        </h2>
        <p className="text-lg font-light text-median tracking-wide leading-8">
          500 Terry Francine St. San Francisco, CA 94158
          <br />
          info@mysite.com
          <br />
          Tel: 123-456-7890
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-6">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" color="#17173f" />
          </a>
          {/* Twitter Icon */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-6 w-6" color="#17173f" />
          </a>
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PhoneCall className="h-6 w-6" color="#17173f" />
          </a>
        </div>
      </div>
      <div className="z-50 w-full px-10 pb-20 md:w-1/2 mt-6 md:mt-0 md:p-24 flex-grow">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-y-10 md:gap-y-16"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
              className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
              className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            onChange={handleChange}
            value={formData.email}
            className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Leave us a message..."
            onChange={handleChange}
            value={formData.message}
            className="flex-1 px-2 py-1 bg-transparent h-12 border-b-[1px] border-[#17173f] focus:outline-none"
            rows={3}
          ></textarea>
          <div className="flex justify-center md:justify-start">
            <CustomButton text="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
