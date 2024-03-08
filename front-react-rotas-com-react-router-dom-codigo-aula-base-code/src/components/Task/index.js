import "./style.css";
import { Link } from "react-router-dom";

function Task({ task }) {
  const { id, name, description, owner } = task;
  return (
    <Link className="container-task" to={`/task-detail/${id}`}>
      <h3>{name}</h3>
      <hr />
      <div>
        <div>
          <strong>Description:</strong>
          <p>{description}</p>
        </div>
        <div>
          <strong>Responsável: </strong>
          <span>{owner}</span>
        </div>
      </div>
    </Link>
  );
}

export default Task;
