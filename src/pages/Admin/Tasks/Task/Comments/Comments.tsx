import { Button, TextField } from "@mui/material";
import { Comment } from "../../../../../types/Comments";

export type Props = {
  comments: Comment[];
};

const Comments = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col gap-3">
        {props.comments.map((comment) => (
          <li
            key={comment.id}
            className="flex flex-col bg-neutral-500 p-2 rounded-lg drop-shadow-xl w-fit"
          >
            <span className="text-sm text-neutral-300">{comment.userName}</span>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>

      <div className="flex flex-row items-end gap-4">
        <TextField
          id="outlined-multiline-flexible"
          label="Добавить комментарий..."
          multiline
          variant="standard"
          className="w-1/3"
        />
        <Button variant="contained" size="small" className="h-fit">
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default Comments;
