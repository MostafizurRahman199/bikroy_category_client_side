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
              <title>CafeBarisal - Home</title>
            </Helmet>
            <Home></Home>
          </>
        ),
      },
      {
        path: "/menu",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Menu</title>
            </Helmet>
            <MenuPage></MenuPage>
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Contact</title>
            </Helmet>
            <Contact></Contact>
          </>
        ),
      },
      {
        path: "/order/:category",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Order Food</title>
            </Helmet>
            <Order></Order>
          </>
        ),
      },

      {
        path: "/register",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Register</title>
            </Helmet>
            <Register />
          </>
        ),
      },

      {
        path: "/ManageMyPostRequest",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - My Volunteer Need Post</title>
            </Helmet>
            <PrivateRoute>{/* something */}</PrivateRoute>
          </>
        ),
      },

      {
        path: "/login",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Login</title>
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
              <title>CafeBarisal - Forgot Password</title>
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
              <title>CafeBarisal - My Profile</title>
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
              <title>CafeBarisal - Update Profile</title>
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
        path: "payment",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Payment</title>
            </Helmet>
            <PrivateRoute>
              <PaymentParent></PaymentParent>
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "user-home",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - User Home</title>
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
              <title>CafeBarisal - Admin Home</title>
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
              <title>Bikroy - Manage Product Title</title>
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
              <title>Bikroy - All Category</title>
            </Helmet>
            <AdminRoute>
              <SeeCategoryTress></SeeCategoryTress>
            </AdminRoute>
          </>
        ), // Explicit route for /dashboard/user-home
      },
      {
        path: "reservation",
        element: <div>Reservation Page</div>, // Replace with your actual component, e.g., <Reservation />
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>, // Replace with your actual component, e.g., <PaymentHistory />
      },
      {
        path: "my-cart",
        element: <MyCart></MyCart>, // Replace with your actual component, e.g., <MyCart />
      },
     
      {
        path: "add-review",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Add Review</title>
            </Helmet>
            <PrivateRoute>
              <AddReview></AddReview>
            </PrivateRoute>
          </>
        ), // Explicit route for /dashboard/user-home
      },
      {
        path: "my-booking",
        element: <div>My Booking Page</div>, // Replace with your actual component, e.g., <MyBooking />
      },
      {
        path: "all-users",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - All Users</title>
            </Helmet>
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          </>
        ),
      },
      {
        path: "add-menu-item",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Add Menu Item</title>
            </Helmet>
            <AdminRoute>
              <AddMenuItem></AddMenuItem>
            </AdminRoute>
          </>
        ),
      },
      {
        path: "manage-items",
        element: (
          <>
            <Helmet>
              <title>CafeBarisal - Add Menu Item</title>
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
          <title>CafeBarisal - Error</title>
        </Helmet>
        <ErrorPage />
      </>
    ),
  },
]);

export default router;
