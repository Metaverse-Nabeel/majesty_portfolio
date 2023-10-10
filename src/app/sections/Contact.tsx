"use client";
import {
  faEnvelope,
  faLocation,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="flex flex-col bg-[#616161]/60 w-full px-4">
        <h4 className="text-2xl font-semibold py-6">Contact Me</h4>
        <div className="flex items-center justify-center w-[100%] text-white py-6">
          <div className="w-1/3 flex flex-col gap-2 bg-[#616161] py-4 px-16">
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
            <p className="flex items-center justify-center text-xl">
              email@email.com
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-2 bg-[#009688] py-4 px-16">
            <FontAwesomeIcon icon={faLocation} className="text-4xl" />
            <p className="flex items-center justify-center text-xl">
              Chicago, US
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-2 bg-[#616161] py-4 px-16">
            <FontAwesomeIcon icon={faPhone} className="text-4xl" />
            <p className="flex items-center justify-center text-xl">
              +92-321-5674724
            </p>
          </div>
        </div>
        <div className="flex w-full h-[1px] mx-4 bg-white mt-6"></div>
        <div className="w-full flex flex-col rounded-md py-8">
          <form
            action="https://formsubmit.co/nabeelahmed3129@gmail.com"
            className="w-full pt-4 px-4"
            method="POST"
          >
            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md text-dark"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md text-dark"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md text-dark"
              />
            </div>
              <button
                type="submit"
                className="flex items-center justify-center py-2 px-4 bg-black text-white border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-black"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="text-lg pr-4" />Send Message
              </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
