import { useState } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending an email

    // Reset the form fields
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Head>
        <title>Contact - Expat-ations</title>
        <meta name="description" content="Contact Expat-ations" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('/map_bg.jpg')`,
        }}
      >
        <Navbar /> {/* Add the Navbar component */}
        <div className="max-w-md mx-auto mt-10">
          <div className="bg-opacity-50 bg-black p-4 rounded-md">
            <h1 className="text-4xl font-bold text-white mb-8">
              Can't find the city you're looking for?
            </h1>
            <div className="max-w-md mx-auto mt-10">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          </div>
        </div>
        <br></br>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
            </div>
            <div>
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
    </>
  );
};

export default Contact;
