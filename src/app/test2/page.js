"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [pin, setPin] = useState("");
  const router = useRouter();
  const maxLength = 6;
  const correctPin = "147369";

  const handleNumberClick = (number) => {
    if (pin.length < maxLength) {
      setPin((prev) => prev + number);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };
  const handleVerify = () => {
    if (pin.length === 6) {
      if (pin === correctPin) {
        router.push("/test3");
      } else {
        alert("PIN ไม่ถูกต้อง");
        setPin("");
      }
    }
  };
  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6">
      <div className="w-full pt-4">
        <button
          onClick={handleBackClick}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="mt-8 mb-12">
        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=64&h=64&fit=crop&auto=format"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      <h1 className="text-xl font-medium text-gray-800 mb-8">
        ใส่ PIN เพื่อดำเนินการต่อ
      </h1>

      <div className="flex gap-2 mb-8">
        {Array.from({ length: maxLength }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index < pin.length ? "bg-orange-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <button className="text-gray-600 text-sm mb-12 hover:underline">
        ลืมรหัส PIN&gt;
      </button>

      <div className="grid grid-cols-3 gap-8 w-full max-w-xs">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className="text-2xl font-light text-gray-800 h-12 w-12 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
          >
            {number}
          </button>
        ))}
        <div className="w-12" />
        <button
          onClick={() => handleNumberClick(0)}
          className="text-2xl font-light text-gray-800 h-12 w-12 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
        >
          0
        </button>
        <button
          onClick={handleDelete}
          className="h-12 w-12 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center text-black"
        >
          ⌫
        </button>
      </div>
      {pin.length === 6 && handleVerify()}
    </div>
  );
}
