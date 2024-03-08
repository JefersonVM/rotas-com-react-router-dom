import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TaskDetail from "./pages/TaskDetail";
import { useState } from "react";

const MainRoutes = () => {
  const [allTasks, setAllTasks] = useState([]);
  return (
    <Routes>
      <Route
        path="/"
        element={<Main allTasks={allTasks} setAllTasks={setAllTasks} />}
      />
      <Route
        path="/task-detail/:id"
        element={<TaskDetail allTasks={allTasks} />}
      />
    </Routes>
  );
};

export default MainRoutes;
