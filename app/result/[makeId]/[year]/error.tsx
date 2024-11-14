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
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-gray-700 mb-6">{error.message}</p>
      <div className="space-x-4">
        <button
          onClick={reset}
          className="rounded bg-indigo-700 text-white px-4 py-2 transition duration-200  hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="rounded bg-gray-700 text-white px-4 py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;