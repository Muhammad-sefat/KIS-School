import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import About from "@/pages/about/About";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/SignUp";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/home/Home";
import Service from "@/pages/service/Service";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);

export default router;
