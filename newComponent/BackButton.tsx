import { useRouter } from "next/router";
import React from "react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex gap-2 py-10 items-center container text-black bg-blue-500 hover:bg-blue-600 px-4"
    >
        <img src="/icons/back-arrow.svg" alt="Back" className="h-4 w-4" />
        <span className="font-medium text-xl text-center">Back</span>
      
    </button>
  );
}
