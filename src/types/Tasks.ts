import { Comment } from "./Comments";
import { PhotoAndFiles } from "./PhotoAndFiles";
import { TaskStatus } from "./TaskStatus";
import { TaskTag } from "./TaskTag";

export type TaskType = {
  id: string;
  name: string;
  description: string;
  block: string;
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

export type TaskModule = {
  id: string;
  name: string;
};
