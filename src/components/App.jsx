import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "../data/blog";

function App() {
  return (
    <div className="App min-h-screen bg-slate-50 text-slate-900">
      <div className="w-full mx-auto px-4 py-12 space-y-12 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <Header name="My Personal Blog" />

          <About
            image="https://picsum.photos/200"
            about="Welcome to my blog where I share React learning notes, practical tutorials, and polished project updates."
          />
        </div>

        <section className="space-y-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-600 font-semibold">
              Recent posts
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-black mt-2">
              Built for readability and modern web development.
            </h2>
          </div>

          <ArticleList posts={blog.posts} />
        </section>
      </div>
    </div>
  );
}

export default App;