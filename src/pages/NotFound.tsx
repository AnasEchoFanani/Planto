import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-8xl font-bold text-green-500 mb-4">404</h1>
      <h2 className="text-4xl mb-2">Page Not Found</h2>
      <p className="text-lg mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
