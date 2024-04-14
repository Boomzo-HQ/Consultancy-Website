import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Process the form data
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
      <div className="z-50 md:w-1/2 p-24 flex flex-col gap-y-7">
        <h3 className="text-base font-semibold text-minor uppercase">
          Contact
        </h3>
        <h2 className="text-4xl text-median font-bold">Lets Wrok Together</h2>
        <p className="text-lg font-light text-median tracking-wide leading-8">
          500 Terry Francine St. San Francisco, CA 94158
          <br />
          info@mysite.com
          <br />
          Tel: 123-456-7890
        </p>
      </div>
      <div className="z-50 md:w-1/2 mt-6 md:mt-0 flex-grow">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
              className="flex-1 px-2 py-1 border-b-2 border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
              className="flex-1 px-2 py-1 border-b-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              onChange={handleChange}
              value={formData.email}
              className="px-2 py-1 border-b-2 border-gray-300 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Leave us a message..."
              onChange={handleChange}
              value={formData.message}
              className="px-2 py-1 border-b-2 border-gray-300 focus:outline-none"
              rows={3}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 focus:outline-none transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
