import React from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Courses from "./pages/Courses";
import JobPage from "./pages/JobPage";
import Form from "./pages/Form";
import NoticeBoard from "./pages/NoticeBoard";
import Assignment from "./pages/Assignment";

import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";

import AllCourses from "./pages/AllCourses";
import Courses3A from "./components/Courses3A";
import CrsExtend from "./Components/CrsExtend";
import HtmlAttb from "./Components/HtmlAttb";
import AnaTag from "./Components/AnaTag";
import SelCss from "./Components/SelCss";
import UiuxExt from "./Components/UiuxExt";
import UiuxExt2 from "./Components/UiuxExt2";
import UiuxExt3 from "./Components/UiuxExt3";
import UiuxExt4 from "./Components/UiuxExt4";
import Csec from "./Components/Csec";
import Csec4 from "./Components/Csec4";
import Csec3 from "./Components/Csec3";
import Csec2 from "./Components/Csec2";
import Instructors from "./pages/Instructors";
import AllCou from "./components/AllCou";
import Courses2A from "./components/Courses2A";
import PricingPage from "./pages/PricingPage";
import ItHtml from "./Components/ItHtml";
import ItCss from "./Components/ItCss";
import ItUiux from "./Components/ItUiux";
import ItUiux2 from "./Components/ItUiux2";
import ItCsec from "./Components/ItCsec";
import ItCsec2 from "./Components/ItCsec2";
import SignUpLogin from "./pages/AuthPage";
import AboutUs from "./pages/AboutUs";
import Purchase from "./Components/Purchase";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        //Main Page Routes
        <Route path="/" index element={<HomePage />} />
        <Route path="/AllCourses" index element={<AllCourses />} />
        <Route path="/Contact" index element={<Contact />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/All" element={<AllCou />} />
        <Route path="/login" element={<SignUpLogin />} />
        <Route path="/pricingPage" element={<PricingPage />} />
        <Route path="/Cou2" element={<Courses2A />} />
        <Route path="/Cou3" element={<Courses3A />} />
        <Route path="/Purchase" element={<Purchase />} />
        //Extended pages
        <Route path="/ItHtml" element={<ItHtml />} />
        <Route path="/Ext" element={<CrsExtend />} />
        <Route path="/Hattb" element={<HtmlAttb />} />
        <Route path="/ItCss" element={<ItCss />} />
        <Route path="/Atag" element={<AnaTag />} />
        <Route path="/SelCss" element={<SelCss />} />
        <Route path="/ItUiux" element={<ItUiux />} />
        <Route path="/ItUiux2" element={<ItUiux2 />} />
        <Route path="/UiuxExt" element={<UiuxExt />} />
        <Route path="/UiuxExt2" element={<UiuxExt2 />} />
        <Route path="/UiuxExt3" element={<UiuxExt3 />} />
        <Route path="/UiuxExt4" element={<UiuxExt4 />} />
        <Route path="/ItCsec" element={<ItCsec />} />
        <Route path="/ItCsec2" element={<ItCsec2 />} />
        <Route path="/Csec" element={<Csec />} />
        <Route path="/Csec2" element={<Csec2 />} />
        <Route path="/Csec3" element={<Csec3 />} />
        <Route path="/Csec4" element={<Csec4 />} />
        //Dashboard Routes
        <Route path="/dashboard" element={<Layout />}>
          <Route path="overview" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resources" element={<Resources />} />
          <Route path="courses" element={<Courses />} />
          <Route path="job" element={<JobPage />} />
          <Route path="form" element={<Form />} />
          <Route path="notice" element={<NoticeBoard />} />
          <Route path="assignment" element={<Assignment />} />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default App;
