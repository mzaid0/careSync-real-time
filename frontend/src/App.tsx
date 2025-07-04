import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import DashboardLayout from "./layouts/dashboard-layout";

import HomePage from "./pages/home-page";
import Dashboard from "./pages/dashboard/dashboard-page";
import NotFoundPage from "./pages/not-found";
import AboutPage from "./pages/about-page";
import FeaturesPage from "./pages/features-page";
import LoginPage from "./pages/login/login-page";
import RegisterPage from "./pages/register/register-page";
import CarePlanManagement from "./pages/careplans/careplan-page";

const AppContent = () => {
  const location = useLocation();
  const hideFooterPaths = ["/login", "/register", "/forgot-password"];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="care-plans" element={<CarePlanManagement />} />

        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
