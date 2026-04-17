import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Landing from "@/pages/Landing";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import ScheduleDemo from "@/pages/ScheduleDemo";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import ProductDetailPage from "@/pages/ProductDetailPage";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="mindsync-landing-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}


export default App
