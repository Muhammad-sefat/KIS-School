import { ImageProvider } from "@/components/common/ImageProvider";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-950 px-2 lg:px-4 py-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border dark:border-gray-800">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={ImageProvider.logo} alt="Logo" className="h-16 lg:h-20" />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 dark:text-white mb-2 font-merriweather">
          Welcome to KISS
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Explore the world of learning with us
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Full name is required" })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-gray-100 dark:bg-gray-800 dark:text-white ${
                errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-gray-100 dark:bg-gray-800 dark:text-white ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="text-gray-700 dark:text-gray-300 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-gray-100 dark:bg-gray-800 dark:text-white ${
                errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-700"
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

          <div className="relative">
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              {...register("password_confirmation", {
                required: "Please confirm password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary bg-gray-100 dark:bg-gray-800 dark:text-white ${
                errors.password_confirmation
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-700"
              }`}
            />
            <div
              className="absolute top-9 right-3 cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password_confirmation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>

          <div className="flex items-start space-x-2 text-gray-600 dark:text-gray-400 text-sm">
            <input
              type="checkbox"
              {...register("terms", { required: "You must agree to terms" })}
              className="mt-1"
            />
            <span>
              I agree to the
              <a
                href="#"
                className="text-theme-primary font-semibold hover:underline"
              >
                Terms of Service
              </a>
              &
              <a
                href="#"
                className="text-theme-primary font-semibold hover:underline"
              >
                Privacy Policy
              </a>
            </span>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-theme-primary text-white py-2 rounded-full font-semibold hover:bg-theme-secondary transition duration-200 cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="text-theme-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
