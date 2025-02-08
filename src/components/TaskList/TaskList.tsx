import { useTasks } from "@hooks/useTasks";
import NewTask from "@components/NewTask";
import TaskItem from "./components/TaskItem";
import { Container, List } from "./styles";

const TaskList = () => {
  const { taskList } = useTasks();

  return (
    <Container>
      <List>
        {taskList.map((task) => (
          <TaskItem {...task} />
        ))}
      </List>
      <NewTask />
    </Container>
  );
};

export default TaskList;
