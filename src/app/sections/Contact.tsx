"use client";
import {
  faPaperPlane,
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
      <section className="flex flex-col bg-[#616161]/60 w-full px-4" id="contact">
        <h4 className="text-2xl font-semibold py-4">Contact Me</h4>
        <div className="w-full flex flex-col rounded-md py-4">
          <form
            action="https://formsubmit.co/nabeelahmed3129@gmail.com"
            method="POST"
            className="w-full pt-4 px-4"
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
              <input
                type="text"
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
