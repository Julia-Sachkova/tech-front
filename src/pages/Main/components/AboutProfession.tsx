import { Link } from "react-router-dom";
import Fullstack from "../../../assets/images/fullstack.png";

const AboutProfession = () => {
  return (
    <div className="w-full border-y-2 py-6 flex flex-row gap-12">
      <div className="flex flex-col w-2/3">
        <h2 className="text-4xl font-semibold uppercase">О профессии</h2>

        <p className="text-lg tracking-wide mt-6">
          <span className="font-bold">Fullstack разработчик</span> — это
          универсальный специалист, который может создавать сайты и
          веб-приложения, работая, как над серверной частью, то есть бэкендом,
          так и над визуальной, клиентской частью - фронтендом. Поэтому такие
          разработчики очень ценятся, подумайте сами: компании выгоднее нанять
          одного специалиста, чем двух - фронтендера и бэкэндера.
        </p>

        <ul className="flex flex-row gap-6 text-neutral-800 mt-12">
          <li className="flex flex-col gap-2 bg-white drop-shadow-xl rounded-xl px-4 py-2">
            <span className="text-3xl font-bold">от 78 000 ₽</span>
            <span>Junior</span>
          </li>

          <li className="flex flex-col gap-2 bg-white drop-shadow-xl rounded-xl px-4 py-2">
            <span className="text-3xl font-bold">от 163 000 ₽</span>
            <span>Middle</span>
          </li>

          <li className="flex flex-col gap-2 bg-white drop-shadow-xl rounded-xl px-4 py-2">
            <span className="text-3xl font-bold">от 353 000 ₽</span>
            <span>Lead</span>
          </li>
        </ul>
      </div>

      <div className="relative">
        <img src={Fullstack} alt="Fullstack." className="h-96" />

        <span className="absolute bottom-0 right-10 text-sm text-neutral-500">
          Designed by{" "}
          <Link
            to="https://pngtree.com/freepng/software-programming-concept-in-3d-isometric-outline-design-development-team-programs-tests-and-optimizes-computer-works-office-line-web-template-vector-illustration-with-people-scene_7601731.html?sol=downref&id=bef"
            className="text-primary"
          >
            PngTree
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AboutProfession;
