import Logo from "../../assets/logo.png";
import "./styles.css";

function TaskDetail() {
  return (
    <main className="container-task-detail">
      <header>
        <img src={Logo} alt="logo" />
      </header>

      <div className="content-task-detail">
        <h1>Estudar ReactJS</h1>

        <div>
          <strong>Description: </strong>
          <p>
            MinhaMinha descrição Minha descrição Minha descrição Minha descrição
            descrição
          </p>
        </div>
        <div>
          <strong>Author: </strong>
          <span>Daniel Lopes</span>
        </div>
        <a href="#">Voltar</a>
      </div>
    </main>
  );
}

export default TaskDetail;
