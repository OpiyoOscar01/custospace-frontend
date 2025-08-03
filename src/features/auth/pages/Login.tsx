import { Helmet } from "react-helmet-async";
import { BsEnvelope, BsLock, BsGithub, BsGoogle } from "react-icons/bs";

function Login() {
  return (
    <>
    <Helmet>
      <title>Login - Custospace</title>
      <meta name="description" content="Login to your Custospace account" />
    </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login to Custospace</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <BsEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full outline-none border-none text-sm"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <BsLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full outline-none border-none text-sm"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition mb-4">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-3 text-xs text-gray-400">OR</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Social Login Buttons */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 mb-2">
          <BsGoogle className="text-red-500" />
          <span className="text-sm">Continue with Google</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100">
          <BsGithub className="text-gray-700" />
          <span className="text-sm">Continue with GitHub</span>
        </button>
      </div>
    </div>
        </>

  );
}

export default Login;
