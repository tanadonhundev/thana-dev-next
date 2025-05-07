import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <section className="py-10 bg-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          {/* Branding & Copyright */}
          <div className="text-center md:text-left">
            <Link href={"#home"}>
              <Image
                src="/Logo.png"
                alt="Profile Image"
                width={150}
                height={150}
                className="mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm mt-1">
              Copyright &copy; 2025 ThaNaDev. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-3xl font-bold text-neutral-900">Contact</p>
            <p>Email: tanadonhun.dev@gmail.com</p>
            <p>Phone: 095-053-4827</p>
          </div>
        </div>
      </div>
    </section>
  );
}
