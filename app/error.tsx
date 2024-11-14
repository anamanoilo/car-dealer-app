"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="mb-4 text-2xl font-bold text-red-600">Vehicle makes are not avaulable right now</h2>
      <div className="space-x-4">
        <button
          onClick={reset}
          className="rounded bg-indigo-700 px-4 py-2 text-white transition duration-200 hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-none"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
