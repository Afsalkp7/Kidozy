import React from "react";

const ContactHero = () => {
  return (
    <div className="flex flex-col justify-center text-center h-30 sm:h-40 md:h-50 lg:h-70">
      <h1 className="text-[18px] sm:text-[25px] md:text-[30p x] lg:text-[40px] font-extrabold text-[#2AB7B1]">
        Get In Touch
      </h1>
      <p className="text-xs sm:text-sm md:text-md lg:text-lg text-slate-500">
        We'd love to hear from you. Whether you have a question about our
        collections or just want to say hi!
      </p>
    </div>
  );
};

export default ContactHero;
