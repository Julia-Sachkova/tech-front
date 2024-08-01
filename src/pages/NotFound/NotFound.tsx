import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col px-16 py-10 min-h-screen">
      <Link to="/" className="text-lg">
        ← Обратно на Главную
      </Link>

      <div className="flex flex-col flex-1 items-center gap-3 pt-20">
        <span className="font-bold text-9xl">404</span>

        <span className="font-semibold text-2xl">Такой страницы нет :(</span>
      </div>
    </section>
  );
};

export default NotFound;
