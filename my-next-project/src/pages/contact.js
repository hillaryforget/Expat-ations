import { useState } from "react";
import Navbar from "../components/NavBar";
import AppHead from "../components/AppHead";
import Footer from "../components/Footer";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Please write your message");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (!isValid) {
      return;
    }

    // Reset the form fields
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <AppHead title="Contact - Expat-ations"/>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('/map_bg.jpg')`,
        }}
      >
        <Navbar
          className={"bg-transparent shadow-none text-3xl"}
          results={false}
        />{" "}
        <div className="max-w-md mx-auto mt-10 pt-6">
          <div className="bg-opacity-50 bg-#e3f6f5 p-4 rounded-md ">
            <div className="flex">
              <p className="inline text-center align-center justify-center glass-shadow mx-auto text-4xl font-bold text-#2d334a mt-6">
                Can't find the city you're looking for?
              </p>
            </div>
            <div className="max-w-md mx-auto mt-10">
              <h1 className="glass-shadow text-4xl font-bold text-#2d334a mb-8">
                Contact Us
              </h1>
            </div>
          </div>
          <br></br>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
              {messageError && (
                <p className="text-red-500 text-xs mt-1">{messageError}</p>
              )}
            </div>
            <div className="pb-4">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
