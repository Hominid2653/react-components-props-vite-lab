import React from "react";

function Header({ name }) {
  return (
    <header className="w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-2 px-4 py-8 sm:px-6">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
          Blog
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
          {name}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Thoughts, code, and experiments
        </p>
      </div>
    </header>
  );
}

export default Header;