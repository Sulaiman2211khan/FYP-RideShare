import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import {Home} from "./pages/Home";
import {ErrorPage} from "./pages/ErrorPage";
// import ProtectedRoute from "./components/ProtectedRoute";
import { SearchPage } from "./Pages/SearchPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { RideDetailPage } from "./Pages/RideDetailPage";
import Layout from "./Pages/Layout";
import PublishRidePage from "./Pages/PublishRidePage";
import Chat from "./Pages/Chat";
import RidesSearched from "./Pages/RIdes_Searched";
import SettingsPage from "./Pages/Settings";
import BookingPage from "./Pages/BookingPage";
import RiderProfilePage from "./Pages/RiderDetailPage";
import RatingsPage from "./Pages/RatingandReviews";
import { EmailVerificationPage } from "./Pages/verificationPage";
import RideHistory from "./Pages/userRides";
import UserSetting from "./components/userSettings/Dashboard";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
      
      <Routes>
        {/* Public Routes */}
        
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/search-ride" element={<SearchPage />} />
        <Route path="/search-ride/:rides" element={<RidesSearched />} />
        <Route path="/ride-detail/:id" element={<RideDetailPage />} />  
        <Route path="/create-ride" element={<PublishRidePage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/users-profile" element={<UserSetting />} />
        <Route path="/user-ridehistory" element={< RideHistory/>} />

        <Route path="/ride-booking/:rideId" element={<BookingPage />} />
        <Route path="/rider-profile/:riderId" element={<RiderProfilePage />} />
        <Route path="/rider-rating/:riderId" element={<RatingsPage />} />
        </ Route>
        {/* <Route path="/booking-confirmation/:id" element={<BookingConfirmation />} /> */}

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/email-verification/verify/:token" element={<EmailVerificationPage />} />


        {/* Protected Routes */}
        {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute adminOnly={true}><Admin /></ProtectedRoute>} /> */}

        {/* Error Handling */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}

export default App;
