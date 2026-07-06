import React, { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Replace "YOUR_FORMSPREE_ID" with your actual form endpoint ID from formspree.io
    const response = await fetch("https://formspree.io/f/xeebdjda", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-slate-8xl">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>

        {status === "SUCCESS" && (
          <p className="mt-4 text-green-600 text-sm font-medium text-center">
            Message delivered straight to my inbox! 🚀
          </p>
        )}
        {status === "ERROR" && (
          <p className="mt-4 text-red-600 text-sm font-medium text-center">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
