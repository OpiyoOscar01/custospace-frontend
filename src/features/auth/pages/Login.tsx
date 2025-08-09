import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { BsEnvelope, BsLock, BsGithub, BsGoogle } from "react-icons/bs";
import { useLogin} from '../../../shared/hooks/useAuth';
import type { LoginRequest } from '../../../shared/types/types';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const loginMutation = useLogin();
  
  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await loginMutation.mutateAsync(formData);
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      // Error handling is done in the mutation
      console.error('Login submission error:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Custospace</title>
        <meta name="description" content="Login to your Custospace account" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login to Custospace
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className={`flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}>
                <BsEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full outline-none border-none text-sm"
                  disabled={loginMutation.isPending}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className={`flex items-center border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}>
                <BsLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full outline-none border-none text-sm"
                  disabled={loginMutation.isPending}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-2 rounded font-medium transition mb-4"
            >
              {loginMutation.isPending ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

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
