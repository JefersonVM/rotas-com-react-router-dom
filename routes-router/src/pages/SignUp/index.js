import "./style.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="App">
      <div className="container-sign-up">
        <h1>SignUp</h1>
        <div>
          <Link to="/sign-in">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
