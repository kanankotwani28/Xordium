// src/routes/DashboardRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages inside the dashboard
import Dashboard from "../pages/dashboard/Dashboard";
import HotTopics from "../pages/dashboard/HotTopics";
import FakeNews from "../pages/dashboard/FakeNews";
import NewsChecker from "../pages/dashboard/NewsChecker";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} /> {/* /dashboard */}
        <Route path="hot-topics" element={<HotTopics />} />{" "}
        {/* /dashboard/hot-topics */}
        <Route path="fake-news" element={<FakeNews />} />{" "}
        {/* /dashboard/fake-news */}
        <Route path="news-checker" element={<NewsChecker />} />{" "}
        {/* /dashboard/news-checker */}
      </Route>
    </Routes>
  );
}
