import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatorPage from "./pages/CreatorPage.jsx";
import Header from "./components/Header.jsx";
import EditAddCreatorPage from "./pages/EditAddCreatorPage.jsx";
import "@picocss/pico";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creators/:id" element={<CreatorPage />} />
        <Route path="/creators/:id/edit" element={<EditAddCreatorPage />} />
        <Route path="/creators/add" element={<EditAddCreatorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
