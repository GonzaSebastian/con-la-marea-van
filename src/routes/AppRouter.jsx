import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/servicios" element={<Services />} />

        <Route path="/contacto" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;