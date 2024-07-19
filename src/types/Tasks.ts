import { Comment } from "./Comments";
import { PhotoAndFiles } from "./PhotoAndFiles";
import { TaskBlock } from "./TaskBlock";
import { TaskStatus } from "./TaskStatus";
import { TaskTag } from "./TaskTag";

export type Task = {
  id: string;
  name: string;
  description: string;
  block: TaskBlock;
  tags: TaskTag[];
  photoAndFiles: PhotoAndFiles[];
  createDate: Date;
  status: TaskStatus;
  comments: Comment[];
  subtask?: string;
  isPreviosNecessary: boolean;
  attachLesson?: string;
  experience: number;
};

export type TaskList = Task[];
