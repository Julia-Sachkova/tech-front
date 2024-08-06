import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getTasks } from "../../../store/reducers/tasksSlice";
import { Button, Menu, MenuItem } from "@mui/material";

const Tasks = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedId, setSelectedId] = useState("0");
  const openMenu = Boolean(anchorEl);

  const dispatch = useAppDispatch();

  const tasks = useAppSelector((state) => state.tasks.tasks);
  const taskModules = useAppSelector((state) => state.tasks.taskModules);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: string
  ) => {
    console.log(event);

    setSelectedId(index);
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-col gap-5 flex-1">
      <Button
        aria-controls={openMenu ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClickListItem}
        variant="contained"
        className="w-fit"
      >
        {taskModules.find((m) => m.id === selectedId)?.name}
      </Button>

      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
        {taskModules.map((module) => (
          <MenuItem
            key={module.id}
            selected={module.id === selectedId}
            onClick={(event) => handleMenuItemClick(event, module.id)}
          >
            {module.name}
          </MenuItem>
        ))}
      </Menu>

      <ul className="grid grid-cols-4 gap-5 flex-1 h-fit">
        {tasks.map((task) => (
          <li
            className="flex flex-col items-start gap-3 h-full px-5 py-3 bg-neutral-600 rounded-lg shadow-xl cursor-pointer transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-xl"
            key={task.id}
          >
            <span className="text-lg font-semibold">{task.name}</span>

            <p className="line-clamp-2">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
