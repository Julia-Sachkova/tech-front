import { Task } from "./Tasks";

export type TaskBlock = {
  id: string;
  name: string;
  tasks: Task[];
};
