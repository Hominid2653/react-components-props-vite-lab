import React from "react";

function Article({ title, date = "January 1, 1970", preview, image }) {
  return (
    <article className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-transform duration-300 ease-out overflow-hidden flex flex-col h-full">
      {image && (
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <small className="text-sm text-slate-500 block mt-3">{date}</small>
        <p className="text-slate-600 mt-4 leading-7 flex-1">{preview}</p>
        <button className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-sky-600 hover:bg-sky-50 transition">
          Read more →
        </button>
      </div>
    </article>
  );
}

export default Article;