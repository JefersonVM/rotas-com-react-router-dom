import NavBar from "../../components/NavBar";
import Dashboard from "../Dashboard";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import "./style.css";

function Main() {
  const currentPath = window.location.pathname;

  return (
    <div className="container-main">
      <NavBar />
      {currentPath === "/sign-in" && <SignIn />}
      {currentPath === "/dashboard" && <Dashboard />}
      {currentPath === "/sign-up" && <SignUp />}
    </div>
  );
}

export default Main;
