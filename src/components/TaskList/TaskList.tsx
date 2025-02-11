import { useTasks } from "@hooks/useTasks";
import NewTask from "@components/NewTask";
import TaskItem from "./components/TaskItem";
import { Container, List } from "./styles";
import { Task } from "@customTypes/task";
import { useState } from "react";

const TaskList = () => {
  const { taskList } = useTasks();
  const [newTaskAt, setNewTaskAt] = useState<Task["id"] | null>(null);
  const [insertAsSubtask, setInsertAsSubtask] = useState(false);

  const handleNewtaskKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        setInsertAsSubtask(false);
      } else {
        setInsertAsSubtask(true);
      }
      event.preventDefault();
    }
  };

  const handleNewTaskFocusOut = () => {
    setNewTaskAt(null);
    setInsertAsSubtask(false);
  };

  const handleInsertNewTask = (id: Task["id"], parent?: Task["id"] | null) => {
    setNewTaskAt(id);
    setInsertAsSubtask(!!parent);
  };

  const getTransferedSubtasks = (): string[] => {
    const index = taskList.findIndex((task) => task.id === newTaskAt);

    if (index === -1) {
      return [];
    }

    const tasksAfterNewTask = taskList.slice(index + 1);

    if (tasksAfterNewTask.length && tasksAfterNewTask[0].parent) {
      return tasksAfterNewTask
        .filter((task) => task.parent === tasksAfterNewTask[0].parent)
        .map((task) => task.id);
    } else {
      return [];
    }
  };

  const getPreviousParentTask = (id: Task["id"]) => {
    const index = taskList.findIndex((task) => task.id === id);

    if (index === -1) {
      return null;
    }

    const previousTasks = taskList.slice(0, index).reverse();

    return previousTasks.find((task) => !task.parent)?.id || null;
  };

  return (
    <Container>
      <List>
        {taskList.map((task) => (
          <>
            <TaskItem
              {...task}
              onInsertNewTask={handleInsertNewTask}
              previousParentTask={getPreviousParentTask(task.id)}
            />
            {newTaskAt === task.id && (
              <NewTask
                onTaskCreation={(task) => setNewTaskAt(task.id)}
                onFocusOut={handleNewTaskFocusOut}
                onKeyDown={handleNewtaskKeyDown}
                insertAfter={newTaskAt}
                {...(insertAsSubtask && { parent: task.parent || task.id })}
                level={insertAsSubtask ? 1 : 0}
                subtasks={insertAsSubtask ? [] : getTransferedSubtasks()}
              />
            )}
          </>
        ))}
        {newTaskAt === null && (
          <NewTask
            onTaskCreation={(task) => setNewTaskAt(task.id)}
            onFocusOut={handleNewTaskFocusOut}
            onKeyDown={handleNewtaskKeyDown}
            {...(insertAsSubtask &&
              taskList.length && {
                parent:
                  taskList[taskList.length - 1]?.parent ||
                  taskList[taskList.length - 1]?.id,
              })}
            level={insertAsSubtask ? 1 : 0}
            subtasks={insertAsSubtask ? getTransferedSubtasks() : []}
          />
        )}
      </List>
    </Container>
  );
};

export default TaskList;
