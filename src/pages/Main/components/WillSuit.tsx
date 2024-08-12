import { Link } from "react-router-dom";
import Fullstack from "../../../assets/images/fullstack.png";

const WillSuit = () => {
  const texts = [
    "Ты знаешь базу С#: умеешь работать с классами, коллекциями, условиями, циклами, интерфейсами, понимаешь базовые принципы ООП",
    "Готов уделять обучению 10+ часов в неделю",
    "Хочешь освоить профессию .net фулстек разработчика и найти работу",
    "Или подтянуть уже имеющиеся знания",
    "Ты уже бэкенд- или фронтенд-разработчик и хочешь расширить сферу деятельность",
  ];

  return (
    <div className="w-full flex flex-col gap-12 border-y-2 pt-6 pb-10">
      <h2 className="text-5xl font-semibold">Тебе подойдет менторинг, если:</h2>

      <div className="flex flex-row justify-between gap-16">
        <div className="relative">
          <img src={Fullstack} alt="Fullstack." className="h-96" />

          <span className="absolute bottom-0 left-10 text-sm text-neutral-500">
            Designed by{" "}
            <Link
              to="https://pngtree.com/freepng/software-programming-concept-in-3d-isometric-outline-design-development-team-programs-tests-and-optimizes-computer-works-office-line-web-template-vector-illustration-with-people-scene_7601731.html?sol=downref&id=bef"
              className="text-primary"
            >
              PngTree
            </Link>
          </span>
        </div>

        <ul className="flex flex-col gap-5 w-1/2">
          {texts.map((text, index) => (
            <li key={index} className="flex flex-row items-center gap-4">
              <span className="text-primary text-5xl font-semibold">
                {index + 1}
              </span>
              <span className="text-2xl">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WillSuit;
