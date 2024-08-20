"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        () => {
          setEmailSent(true);
          setEmail("");
          setTimeout(() => setEmailSent(false), 3000);
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8">
        {/* First Card */}
        <div className="relative bg-black text-white border-2 border-white p-8 rounded-lg shadow-md h-64">
          <h2 className="text-2xl font-bold pb-20">
            Stay Tuned for more Updates
          </h2>
          <form onSubmit={sendEmail} className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-2/3 p-2 rounded-l-lg text-black"
            />
            <button
              type="submit"
              className="bg-black text-white hover:bg-zinc-700 p-2 rounded-r-lg"
            >
              <img src="/mail.png" alt="Submit" />
            </button>
          </form>
          {emailSent && (
            <p className="mt-2 text-white">Email sent successfully!</p>
          )}

          {/* Background Image */}
          <img
            src="/blockchain.png"
            alt="Background"
            className="hidden md:block absolute bottom-0 right-0 w-54 h-full opacity-50 py-2 pr-2 pointer-events-none"
          />
        </div>

        {/* Second Card */}
        <div className="bg-black text-white border-2 border-white p-8 rounded-lg shadow-md h-64">
          <h2 className="text-2xl font-bold pb-20">Join the Community!</h2>
          <div className="flex space-x-4">
            <a
              href={process.env.NEXT_PUBLIC_TWITTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-lg border-2 border-white flex items-center justify-center w-full hover:bg-zinc-900"
            >
              <img src="/twitter.png" alt="Twitter" className="mr-2" />
              Join Twitter
            </a>
            <a
              href={process.env.NEXT_PUBLIC_DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-lg border-2 border-white flex items-center justify-center w-full hover:bg-zinc-900"
            >
              <img src="/discord.png" alt="Discord" className="mr-2" />
              Join Discord
            </a>
          </div>
        </div>

        <div>
          <div className="border bg-gray-20" />
          <p className="regular-14 w-full text-center py-8 text-customDBlue">
            2024 3Pay | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
