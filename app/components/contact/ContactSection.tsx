"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-dark text-center md:text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Form & Included Info */}
          <div className="flex flex-col gap-10">
            {/* Included Info / Office Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-[#E96D92]/10 flex items-center justify-center text-[#E96D92] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E96D92"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-bag-icon lucide-shopping-bag"
                  >
                    <path d="M16 10a4 4 0 0 1-8 0" />
                    <path d="M3.103 6.034h17.794" />
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                  Our Location
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Perinthalmanna road uphill, Malappuram
                  <br />
                  Kerala, India
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-[#2AB7B1]/10 flex items-center justify-center text-[#2AB7B1] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2AB7B1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-calendar-clock-icon lucide-calendar-clock"
                  >
                    <path d="M16 14v2.2l1.6 1" />
                    <path d="M16 2v4" />
                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                    <path d="M3 10h5" />
                    <path d="M8 2v4" />
                    <circle cx="16" cy="16" r="6" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                  Working Hours
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Mon - Sat: 10:00 AM - 9:30 PM
                  <br />
                  Its Not Fixed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#E96D92] outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#E96D92] outline-none transition-all"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#E96D92] outline-none transition-all resize-none"
              ></textarea>
              <button className="w-full py-4 bg-[#E96D92] hover:bg-[#E96D92]-dark text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#E96D92]/20">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Map */}
          <div className="h-full min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9571183796716!2d76.07943557480903!3d11.041841989123512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9f0d51ab27%3A0x7109c62dd79b5c60!2s758%2C%20Palakkad%20-%20Kozhikode%20Hwy%2C%20Up%20Hill%2C%20Malappuram%2C%20Kerala%20676505!5e0!3m2!1sen!2sin!4v1771719927568!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
