import { Helmet } from "react-helmet-async";
import { BsEnvelope, BsLock, BsPerson, BsGoogle, BsGithub } from "react-icons/bs";

function Register() {
  return (
    <>
      <Helmet>
        <title>Register - Custospace</title>
        <meta name="description" content="Create a new account on Custospace" />
      </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create an Account</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <BsPerson className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="John Doe"
              className="w-full outline-none border-none text-sm"
            />
          </div>
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="mb-4">
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <div className="flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <BsLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full outline-none border-none text-sm"
            />
          </div>
        </div>

        {/* Submit */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition mb-4">
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-3 text-xs text-gray-400">OR</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Social Sign Up */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 mb-2">
          <BsGoogle className="text-red-500" />
          <span className="text-sm">Sign up with Google</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100">
          <BsGithub className="text-gray-700" />
          <span className="text-sm">Sign up with GitHub</span>
        </button>
      </div>
    </div>
        </>

  );
}

export default Register;
