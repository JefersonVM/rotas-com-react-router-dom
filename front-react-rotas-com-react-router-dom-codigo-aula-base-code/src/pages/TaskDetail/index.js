import "./styles.css";
import Header from "../../components/Header";
import { useParams, Link } from "react-router-dom";

function TaskDetail({ allTasks }) {
  const params = useParams();

  const { name, description, owner } = allTasks.find(
    (task) => task.id === parseInt(params.id)
  );

  return (
    <main className="container-task-detail">
      <Header />

      <div className="content-task-detail">
        <h1>{name}</h1>

        <div>
          <strong>Description: </strong>
          <p>{description}</p>
        </div>
        <div>
          <strong>Author: </strong>
          <span>{owner}</span>
        </div>
        <Link to="/">Voltar</Link>
      </div>
    </main>
  );
}

export default TaskDetail;
