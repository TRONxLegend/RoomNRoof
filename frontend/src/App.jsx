import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import About from "./pages/About";
import RentProperty from "./pages/RentProperty";
import BookEnquiry from "./pages/BookEnquiry";
import Navbar from "./components/ui/Navbar";
import SaleProperty from "./pages/SaleProperty";
import Interior from "./pages/Interior";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* ✅ Toaster mounted ONCE */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1a1a1a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          },
          success: {
            iconTheme: {
              primary: "#38fc62",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <ScrollToTop />
        {/* MAIN CONTENT */}
        <main className="flex-1">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rent-property" element={<RentProperty />} />
            <Route path="/sale-property" element={<SaleProperty />} />
            <Route path="/book-enquiry" element={<BookEnquiry />} />
            <Route path="/interior" element={<Interior />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
