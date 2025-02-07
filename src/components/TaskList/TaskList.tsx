import { useTasks } from "../../hooks/useTasks";
import NewTask from "./components/NewTask/NewTask";
import TaskItem from "./components/TaskItem";
import { Container, List } from "./styles";

const TaskList = () => {
  const { taskList, addTask } = useTasks();

  return (
    <Container>
      <List>
        {taskList.map((task) => (
          <li>
            <TaskItem {...task} />
          </li>
        ))}
      </List>
      <NewTask onTaskCreation={addTask} />
    </Container>
  );
};

export default TaskList;
