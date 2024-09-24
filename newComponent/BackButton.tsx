import { useRouter } from "next/router";
import React from "react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex gap-2 py-6 items-center container text-black px-4"
    >
        <img src="/icons/back-arrow.svg" alt="Back" className="h-4 w-4" />
        <span className="font-medium text-xl text-center">Back</span>
      
    </button>
  );
}
