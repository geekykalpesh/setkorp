import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <p className="text-gray-600 mb-6">Page not found</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-[#e85a4f] text-white rounded hover:bg-[#d14a3f]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}