import "./styles.css";
import Header from "../../components/Header";
import Task from "../../components/Task";
import { useState } from "react";

function Main({ allTasks, setAllTasks }) {
  const [inputNewTask, setInputNewTask] = useState("");

  const handleAddNewTask = () => {
    if (inputNewTask === "") {
      return;
    }

    let description = "";

    for (let i = 0; i < 50; i++) {
      description += `${inputNewTask}`;
    }

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: inputNewTask,
      description,
      owner: "Jeferson Vieira",
    };

    setAllTasks([...allTasks, newTask]);
    setInputNewTask("");
  };

  return (
    <main>
      <Header />
      <div className="container-new-task">
        <input
          value={inputNewTask}
          onChange={(e) => setInputNewTask(e.target.value)}
          type="text"
          placeholder="Adicionar nova tarefa"
        />
        <button onClick={handleAddNewTask}>Adicionar</button>
      </div>

      <hr />

      <div className="container">
        {allTasks.map((task) => (
          <Task key={task.id} task={task} all />
        ))}
      </div>
    </main>
  );
}

export default Main;
