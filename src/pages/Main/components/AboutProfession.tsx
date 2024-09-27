import { Link } from "react-router-dom";
import Fullstack from "../../../assets/images/fullstack.png";

const AboutProfession = () => {
  return (
    <div className="w-full border-y-2 py-6 flex flex-row gap-12 px-16">
      <div className="flex flex-col w-2/3">
        <h2 className="text-4xl font-semibold uppercase">О профессии</h2>

        <p className="text-lg tracking-wide mt-6">
          <span className="font-bold"> .Net Fullstack разработчик</span> — это
          универсальный специалист, который может создавать сайты и
          веб-приложения, работая, как над серверной частью, то есть бэкендом,
          так и над визуальной, клиентской частью - фронтендом. Поэтому такие
          разработчики очень ценятся, подумайте сами: компании выгоднее нанять
          одного специалиста, чем двух - фронтендера и бэкэндера.
        </p>

        <ul className="flex flex-row gap-6 text-neutral-800 mt-12">
          <li className="flex flex-col gap-2 bg-white drop-shadow-xl rounded-xl px-4 py-2">
            <span className="text-3xl font-bold whitespace-nowrap">
              от 78 000 ₽
            </span>
            <span className="text-lg">Junior</span>
          </li>

          <li className="flex flex-col gap-2 bg-white drop-shadow-xl rounded-xl px-4 py-2">
            <span className="text-3xl font-bold whitespace-nowrap">
              от 163 000 ₽
            </span>
            <span className="text-lg">Middle</span>
          </li>

          <li className="flex flex-col gap-2 bg-white drop-shadow-xl rounded-xl px-4 py-2">
            <span className="text-3xl font-bold whitespace-nowrap">
              от 353 000 ₽
            </span>
            <span className="text-lg">Lead</span>
          </li>
        </ul>
        <span className="text-neutral-500 mt-2">
          По данным{" "}
          <Link
            to="https://career.habr.com/salaries?spec_aliases%5B%5D=fullstack"
            className="border-b border-neutral-500"
          >
            Хабр
          </Link>
        </span>
      </div>

      <img src={Fullstack} alt="Fullstack." className="h-96" />
    </div>
  );
};

export default AboutProfession;
