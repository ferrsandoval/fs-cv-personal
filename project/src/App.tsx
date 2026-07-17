import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSite } from "./context/SiteContext";
import { HomePage } from "./pages/HomePage";
import { DemoPage } from "./pages/DemoPage";

export default function App() {
  const { theme, sty } = useSite();

  return (
    <BrowserRouter>
      <div
        data-theme={theme}
        data-sty={sty}
        style={{
          minHeight: "100vh",
          overflowX: "hidden",
          position: "relative",
          color: "var(--text)",
          background: "var(--bg)",
          fontFamily: "var(--sf)",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo/:slug" element={<DemoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
