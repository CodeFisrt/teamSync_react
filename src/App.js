import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Employee from "./components/Employee";
import SalaryAdvance from "./components/SalaryAdvance";
import SalaryVoucher from "./components/SalaryVoucher";
import Leaves from "./components/Leaves";
import Header from "./components/Header";
import Enquiry from "./components/Enquiry";
import User from "./components/User";
import Admin from "./components/Admin";
import { createContext } from "react";

const Appcontext = createContext();

function App() {
  const contextValue = {
    appVersion: "TeamSync v-001",
    craetedBy: "Batch - 21",
  };
  return (
    <div className="App">
      <Appcontext.Provider value={contextValue}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Attendance" element={<Attendance />}></Route>
            <Route path="/Employee" element={<Employee />}></Route>
            <Route path="/Salary-Advance" element={<SalaryAdvance />}></Route>
            <Route path="/Salary-Voucher" element={<SalaryVoucher />}></Route>
            <Route path="/Leaves" element={<Leaves />}></Route>
            <Route path="/Enquiry" element={<Enquiry />}></Route>
            <Route path="/User" element={<User />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </Appcontext.Provider>
    </div>
  );
}

export default App;

export {Appcontext};
