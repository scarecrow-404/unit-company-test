"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validUsers = [{ phone: "0943135555" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!phone) {
      setError("กรุณากรอกหมายเลขโทรศัพท์");
      return;
    }
    if (phone.length !== 10) {
      setError("หมายเลขโทรศัพท์ต้องมี 10 หลัก");
      return;
    }

    const user = validUsers.find((u) => u.phone === phone);
    if (!user) {
      setError("หมายเลขโทรศัพท์ไม่ถูกต้อง");
      return;
    }

    router.push("/test2");
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen bg-white px-6 py-10">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md h-full flex flex-col ">
        <div className="flex items-center w-full">
          <AiOutlineArrowLeft
            className="text-2xl cursor-pointer text-black"
            onClick={() => router.back()}
          />
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-lg font-medium text-center flex-1 text-black">
              เชื่อมต่อ
            </h2>
            <h2 className="text-lg font-medium text-center text-black">
              ด้วยหมายเลขโทรศัพท์มือถือ
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full mt-6">
          <div className="relative ">
            <label className="text-xs text-gray-500">เบอร์โทรศัพท์</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="กรุณากรอกหมายเลขโทรศัพท์"
              className="w-full pt-4 border text-base placeholder:text-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-300 shadow-inner text-black"
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs text-center mt-2">{error}</p>
          )}
        </form>
        <div className="mt-6 justify-end h-full flex flex-col space-y-4">
          <p className="text-xs text-gray-500 text-center px-4">
            โดยกดปุ่ม "ตกลง" เพื่อดำเนินการต่อ ท่านยอมรับ
            <span className="text-blue-500"> ข้อกำหนดและเงื่อนไขในระบบ </span>
            รับทราบและยินยอมให้บันทึกข้อมูลส่วนบุคคล
          </p>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-full shadow-md flex items-center justify-center space-x-2 hover:bg-green-600"
            onClick={handleSubmit}
          >
            <span className="text-lg font-semibold">ตกลง</span>
          </button>
        </div>
      </div>
    </div>
  );
}
