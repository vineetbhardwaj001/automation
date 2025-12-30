import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CharacterSection from "./components/CharacterSection";
import ScrollVideoSection from "./components/ScrollVideoSection";

// Pages
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* 🔵 LANDING PAGE */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <CharacterSection />
            <ScrollVideoSection />
          </>
        }
      />

      {/* 🔐 LOGIN PAGE */}
      {/* <Route path="/login" element={<div>Login Page</div>} /> */}

      {/* 🧠 DASHBOARD PAGE */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
