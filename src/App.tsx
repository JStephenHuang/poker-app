import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AboutPage from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
