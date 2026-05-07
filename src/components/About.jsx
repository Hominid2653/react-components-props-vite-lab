import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center gap-5">
      <img
        src={image}
        alt="blog logo"
        className="w-20 h-20 rounded-full object-cover shadow-sm"
      />

      <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
        {about}
      </p>
    </aside>
  );
}

export default About;