import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/31bd9ab3-0a6e-4a3d-81c9-eca20ad8b9fd"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8  md:mt-0 mt-[30%] text-left">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email{" "}
            <a href="mailto:mail2manasak@gmail.com">
              <span className="text-pink-400">mail2manasak@gmail.com</span>
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 "
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] "
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-3"
          type="number"
          placeholder="Contact Number"
          name="number"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
