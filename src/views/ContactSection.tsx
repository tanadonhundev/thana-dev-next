import React from "react";

export default function ContactSection() {
  return (
    <div>
      <section id="contact" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex justify-center">
              <h1>Contact Me</h1>
            </div>
            <p className="text-lg text-gray-600 mt-4">
              Feel free to reach out if you have any questions or want to
              collaborate!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <form
                action="#"
                method="POST"
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // rows="4"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
