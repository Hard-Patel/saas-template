import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import { BlogsPage } from "./pages/Blogs";
import { ContactUsPage } from "./pages/ContactUs";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
