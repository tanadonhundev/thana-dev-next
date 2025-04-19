import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  title: string;
  period: string;
  description: string[];
  imgSrc: string;
  altText: string;
  onButtonClick: () => void; // ฟังก์ชันที่ใช้ในการคลิกปุ่ม
};

export default function ProjectCard({
  title,
  period,
  description,
  imgSrc,
  altText,
  onButtonClick, // รับ prop สำหรับฟังก์ชันปุ่ม
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <Image
        src={imgSrc}
        alt={altText}
        width={400}
        height={400}
        className="rounded-t-lg w-full h-56 object-cover"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{period}</p>
        <ul className="mt-2 space-y-1 text-gray-700">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        {/* ปุ่มที่ให้ผู้ใช้กด */}
        <button
          onClick={onButtonClick}
          className="absolute bottom-4 right-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
