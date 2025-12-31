'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-[#e85a4f] text-white rounded hover:bg-[#d14a3f]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}