import "./style.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="App">
      <div className="container-sign-in">
        <h1>SignIn</h1>
        <div className="links">
          <Link to="/dashboard">Entrar</Link>
          <Link to="/sign-up">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
