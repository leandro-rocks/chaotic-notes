import React, { createContext, useEffect, useState } from "react";
import { AddTaskConfig, TaskContextType } from "./types";
import { getTasks, saveTasks } from "../../services/storage";
import { useDates } from "../useDates";
import { Task } from "@customTypes/task";

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const { currentDate } = useDates();

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();

      setAllTasks(tasks);
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const currentDateTasks = allTasks.filter(
      (task) =>
        new Date(task.addedAt).getTime() <= new Date(currentDate).getTime()
    );

    const notFinishedTasks = currentDateTasks.filter(
      (task) => !task.finishedAt || task.finishedAt === currentDate
    );

    setTaskList(notFinishedTasks);
  }, [currentDate, allTasks]);

  const addTask = (task: Task, config?: AddTaskConfig) => {
    const { insertAfter } = config || {};

    const newTaskList = [...allTasks];

    if (insertAfter) {
      const index = allTasks.findIndex((t) => t.id === insertAfter);
      if (index !== -1) {
        newTaskList.splice(index + 1, 0, task);
      } else {
        newTaskList.push(task);
      }
    } else {
      newTaskList.push(task);
    }

    setAllTasks(newTaskList);

    saveTasks(newTaskList);
  };

  const setTaskStatus = (id: string, status: Task["status"]) => {
    const updatedTasks = allTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status,
          ...(status === "INITIATED" && { initiatedAt: currentDate }),
          ...(status === "FINISHED" && { finishedAt: currentDate }),
          ...(status === "TO-DO" && { initiatedAt: null, finishedAt: null }),
        };
      }

      return task;
    });

    setAllTasks(updatedTasks);

    saveTasks(updatedTasks);
  };

  const editTask = (id: string, task: Partial<Task>) => {
    const updatedTasks = allTasks.map((t) => {
      if (t.id === id) {
        return { ...t, ...task };
      }

      return t;
    });

    setAllTasks(updatedTasks);

    saveTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        addTask,
        setTaskStatus,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
