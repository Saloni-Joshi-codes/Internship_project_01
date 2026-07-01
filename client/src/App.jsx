import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Payroll from "./pages/payroll";
import Reports from "./pages/Reports";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employee />} />
      <Route path="/payroll" element={<Payroll />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;