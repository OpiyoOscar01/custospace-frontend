import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../services/authService';
import type { AuthResponse, LoginRequest, RegisterRequest, User } from '../types/types';
import { toast } from 'react-hot-toast'; // or your preferred toast library

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Store token and user data
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Update query cache
      queryClient.setQueryData(['auth', 'user'], data.user);
      
      // Log the returned data
      console.log('Login successful:', data);
      
      toast.success('Login successful!');
    },
    onError: (error: any) => {
      console.error('Login error:', error);
      
      const message = error.response?.data?.message || 'Login failed';
      toast.error(message);
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, RegisterRequest>({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      // Store token and user data
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Update query cache
      queryClient.setQueryData(['auth', 'user'], data.user);
      
      // Log the returned data
      console.log('Registration successful:', data);
      
      toast.success('Account created successfully!');
    },
    onError: (error: any) => {
      console.error('Registration error:', error);
      
      const message = error.response?.data?.message || 'Registration failed';
      toast.error(message);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Clear storage
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      
      // Clear query cache
      queryClient.clear();
      
      console.log('Logout successful');
      toast.success('Logged out successfully');
    },
    onError: (error) => {
      console.error('Logout error:', error);
      // Still clear local data even if API call fails
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      queryClient.clear();
    },
  });
};

export const useCurrentUser = () => {
  return useQuery<User | null>({
    queryKey: ['auth', 'user'],
    queryFn: () => {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    },
    staleTime: Infinity,
  });
};
