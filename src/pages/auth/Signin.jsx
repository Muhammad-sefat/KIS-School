import { ImageProvider } from "@/components/common/ImageProvider";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signin Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={ImageProvider.logo} alt="Logo" className="h-20" />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 font-merriweather">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <div
              className="absolute top-9 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="mt-1" />
              Remember me
            </label>
            <Link
              to="/forget-password"
              className="text-theme-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-theme-primary text-white py-2 rounded-full font-semibold hover:bg-theme-secondary transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-theme-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
