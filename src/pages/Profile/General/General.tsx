import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";

const General = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <ul className="flex flex-col gap-4">
      <li className="text-xl text-neutral-300">УРОВЕНЬ {user?.level}</li>

      <li className="flex flex-col gap-1">
        <span className="text-sm text-neutral-400">Имя</span>
        <span className="text-lg">{user?.name}</span>
      </li>

      <li className="flex flex-col gap-1">
        <span className="text-sm text-neutral-400">GitHub</span>
        <Link
          to={user?.github ? user.github : "/"}
          className="text-lg underline decoration-neutral-400 hover:opacity-50 transition ease-in-out duration-200"
        >
          {user?.github}
        </Link>
      </li>

      <li className="flex flex-col gap-1">
        <span className="text-sm text-neutral-400">Контакты</span>
        <span className="text-lg">{user?.contacts}</span>
      </li>
    </ul>
  );
};

export default General;
