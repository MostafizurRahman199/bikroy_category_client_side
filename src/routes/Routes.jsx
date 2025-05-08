import { createBrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/Menus/MenuPage";
import Order from "../pages/Order/Order";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layouts/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import MyCart from "../pages/Dashboard/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddMenuItem from "../pages/Dashboard/AddMenu/AddMenuItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import PaymentParent from "../pages/Dashboard/Payment/PaymentParent";
import ManageProductTitle from "../pages/Dashboard/ManageProductTitle/ManageProductTitle";
import SeeCategoryTress from "../pages/Dashboard/SeeCategoryTress/SeeCategoryTress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Home</title>
            </Helmet>
            <Home></Home>
          </>
        ),
      },
    

      {
        path: "/register",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Register</title>
            </Helmet>
            <Register />
          </>
        ),
      },

      {
        path: "/login",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Login</title>
            </Helmet>
            <Login />
          </>
        ),
      },

      {
        path: "/forgot-password",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Forgot Password</title>
            </Helmet>
            <ForgetPassword />
          </>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - My Profile</title>
            </Helmet>
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          </>
        ),
      },

      {
        path: "/update-profile",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Update Profile</title>
            </Helmet>
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          </>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
    
    
      {
        path: "user-home",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - User Home</title>
            </Helmet>
            <PrivateRoute>
              <UserHome></UserHome>
            </PrivateRoute>
          </>
        ), // Explicit route for /dashboard/user-home
      },
      {
        path: "admin-home",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Admin Home</title>
            </Helmet>
            <AdminRoute>
              <AdminHome></AdminHome>
            </AdminRoute>
          </>
        ), // Explicit route for /dashboard/user-home
      },
      {
        path: "manage-product-title",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Manage Product Title</title>
            </Helmet>
            <AdminRoute>
              <ManageProductTitle></ManageProductTitle>
            </AdminRoute>
          </>
        ), // Explicit route for /dashboard/user-home
      },
      {
        path: "see-category-tree",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - All Category</title>
            </Helmet>
            <AdminRoute>
              <SeeCategoryTress></SeeCategoryTress>
            </AdminRoute>
          </>
        ), // Explicit route for /dashboard/user-home
      },
      {
        path: "all-users",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - All Users</title>
            </Helmet>
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          </>
        ),
      },
      {
        path: "manage-items",
        element: (
          <>
            <Helmet>
              <title>Bikroy Category - Add Menu Item</title>
            </Helmet>
            <AdminRoute>
              <ManageItems></ManageItems>
            </AdminRoute>
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Helmet>
          <title>Bikroy Category - Error</title>
        </Helmet>
        <ErrorPage />
      </>
    ),
  },
]);

export default router;
