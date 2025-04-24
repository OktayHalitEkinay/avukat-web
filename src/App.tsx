import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const { Content } = Layout;

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Sayfa yüklenince hemen kontrol et
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundStyle = isMobile
    ? {
        backgroundColor: "#f5f5f5",
      }
    : {
        backgroundImage: "url('/images/justice.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: 0.98,
      };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />

        <Content
          className="app-content"
          style={{
            padding: "24px",
            ...backgroundStyle, // sadece burası değişiyor
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
