import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container-nav-bar">
      <h2>Dashboard</h2>
      <Link to="/sign-in">Sair</Link>
    </nav>
  );
}

export default NavBar;
