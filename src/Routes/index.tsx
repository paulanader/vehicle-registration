import { Route, Routes, BrowserRouter } from "react-router-dom";
import VehiclePage from "../pages/VehiclePage";
import VehicleEditPage from "../pages/VehicleEditPage";
import VehicleRegistrationPage from "../pages/VehicleRegistrationPage";

export const PagesRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<VehiclePage />} />
      <Route path="/vehicles/:id" element={<VehicleEditPage />} />
      <Route path="/vehicles/add" element={<VehicleRegistrationPage />} />
    </Routes>
  </BrowserRouter>
);
