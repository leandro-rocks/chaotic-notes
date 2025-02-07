import { useTasks } from "../../hooks/useTasks";
import NewTask from "./components/NewTask/NewTask";
import TaskItem from "./components/TaskItem";

const TaskList = () => {
  const { taskList, addTask } = useTasks();

  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <li>
            <TaskItem {...task} />
          </li>
        ))}
      </ul>
      <NewTask onTaskCreation={addTask} />
    </div>
  );
};

export default TaskList;
