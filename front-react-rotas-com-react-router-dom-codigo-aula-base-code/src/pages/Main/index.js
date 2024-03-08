import Logo from "../../assets/logo.png";
import "./styles.css";

function Main() {
  return (
    <main>
      <header>
        <img src={Logo} alt="logo" />
      </header>

      <div className="container-new-task">
        <input type="text" placeholder="Adicionar nova tarefa" />
        <button>Adicionar</button>
      </div>

      <hr />

      <div className="container">
        <div className="container-task">
          <h3>Estudar ReactJS</h3>
          <hr />
          <div>
            <div>
              <strong>Description:</strong>
              <p>
                Minha descrição minha descrição Minha descrição minha
                descriçãoMinha descrição minha descrição
              </p>
            </div>
            <div>
              <strong>Responsável: </strong>
              <span>Daniel Lopes</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
