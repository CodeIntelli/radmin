/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-undef */
import { Routes, Route, Link, Navigate } from 'react-router-dom';
// import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
// components
import LoadingScreen from '../components/LoadingScreen';
// Dashboard

import Four from '../pages/PageFour';
import Five from '../pages/PageFive';
import Six from '../pages/PageSix';
import GeneralApp from '../pages/dashboard/GeneralApp';
import GeneralEcommerce from '../pages/dashboard/GeneralEcommerce';
import GeneralAnalytics from '../pages/dashboard/GeneralAnalytics';
import GeneralBanking from '../pages/dashboard/GeneralBanking';
import GeneralBooking from '../pages/dashboard/GeneralBooking';
// import Error from '../pages/Page404';
import UserProfile from '../pages/dashboard/UserProfile';

// Authentication
// import Login from '../pages/auth/Login';
// import Register from '../pages/auth/Register';
// import ResetPassword from '../pages/auth/ResetPassword';
// import VerifyCode from '../pages/auth/VerifyCode';

import EcommerceShop from '../pages/dashboard/EcommerceShop';
import EcommerceProductDetails from '../pages/dashboard/EcommerceProductDetails';
import EcommerceProductList from '../pages/dashboard/EcommerceProductList';
import EcommerceProductCreate from '../pages/dashboard/EcommerceProductCreate';
import EcommerceCheckout from '../pages/dashboard/EcommerceCheckout';
import EcommerceInvoice from '../pages/dashboard/EcommerceInvoice';
import BlogPosts from '../pages/dashboard/BlogPosts';
import BlogPost from '../pages/dashboard/BlogPost';
import BlogNewPost from '../pages/dashboard/BlogNewPost';
import UserCards from '../pages/dashboard/UserCards';
import UserList from '../pages/dashboard/UserList';
import UserAccount from '../pages/dashboard/UserAccount';
import UserCreate from '../pages/dashboard/UserCreate';
import Chat from '../pages/dashboard/Chat';
import Mail from '../pages/dashboard/Mail';
import Calendar from '../pages/dashboard/Calendar';
import Kanban from '../pages/dashboard/Kanban';
// Main
// import HomePage from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Faqs from '../pages/Faqs';
// import ComingSoon from '../pages/ComingSoon';
// import Maintenance from '../pages/Maintenance';
// import Pricing from '../pages/Pricing';
// import Payment from '../pages/Payment';
// import Page500 from '../pages/Page500';
// import NotFound from '../pages/Page404';

const index = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<DashboardLayout />}>
          <Route path="" element={<Navigate to="/app" replace />} />
          <Route path="app" element={<GeneralApp />} />
          <Route path="e-commerce" element={<GeneralEcommerce />} />
          <Route path="analytics" element={<GeneralAnalytics />} />
          <Route path="banking" element={<GeneralBanking />} />
          <Route path="booking" element={<GeneralBooking />} />
        </Route>
        <Route path="dashboard/user" element={<DashboardLayout />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="five" element={<Five />} />
          <Route path="six" element={<Six />} />
          <Route path="six" element={<Six />} />
          <Route path="six" element={<Six />} />
        </Route>
      </Routes>
    </>
  );
};

export default index;
