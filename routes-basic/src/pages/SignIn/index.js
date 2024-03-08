import "./style.css";

function SignIn() {
  return (
    <div className="App">
      <div className="container-sign-in">
        <h1>SignIn</h1>
        <div className="links">
          <a href="/dashboard">Entrar</a>
          <a href="/sign-up">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
