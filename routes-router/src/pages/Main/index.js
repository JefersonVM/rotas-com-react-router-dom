import NavBar from "../../components/NavBar";
import Dashboard from "../Dashboard";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import "./style.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ redirectTo }) => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
};

function Main() {
  return (
    <div className="container-main">
      <NavBar />

      <Routes>
        <Route path="/">
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route element={<ProtectedRoutes redirectTo={"/sign-in"} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Main;
