import React from "react";

export default function FooterSection() {
  return (
    <section className="py-10 bg-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          {/* Branding & Copyright */}
          <div>
            <h2 className="text-lg font-semibold">ThaNaDev</h2>
            <p className="text-sm mt-1">
              Copyright &copy; 2025 ThaNaDev. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p>Email: tanadonhun.dev@gmail.com</p>
            <p>Phone: 095-053-4827</p>
          </div>
        </div>
      </div>
    </section>
  );
}
