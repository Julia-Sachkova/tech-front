import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import mainPhoto from "../../../assets/images/mainPhoto.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import { Rating } from "@mui/material";

const Cover = () => {
  return (
    <div className="w-full lg:w-11/12 flex flex-row justify-between gap-10 md:gap-20 relative overflow-hidden bg-neutral-700 pl-7 md:pl-14 pt-3 md:pt-6 rounded-xl">
      <div className="flex flex-col gap-5 z-20">
        <h1 className="text-4xl md:text-5xl xl:text-8xl font-semibold">
          Менторинг .Net
          <br /> Fullstack
        </h1>

        <ul className="flex flex-row divide-x text-neutral-400 items-center text-sm md:text-base lg:text-lg">
          <li className="pr-2 xl:pr-3">Кирилл Сачков</li>
          <li className="inline-block px-2 xl:px-3 after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link
              to="https://www.youtube.com/@KirillSachkov"
              className="flex flex-row gap-2 items-center md:py-2"
            >
              <Icon icon="mdi:youtube" width="28" />
              <span>YouTube</span>
            </Link>
          </li>
          <li className="inline-block px-2 xl:px-3 after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link
              to="https://t.me/sachkov_blog"
              className="flex flex-row gap-2 items-center md:py-2"
            >
              <Icon icon="ic:baseline-telegram" width="28" />
              <span>Telegram</span>
            </Link>
          </li>
        </ul>

        <div className="mt-12 flex flex-col gap-20">
          <ul className="list-disc flex flex-col gap-1 pl-6 text-xl">
            <li>Получишь опыт приближенный к коммерческому</li>
            <li>Получишь опыт разработки фулстак приложения с нуля</li>
            <li>Получишь пет-проект для портфолио</li>
            <li>Освоишь сложные принципы и концепции разаботки</li>
          </ul>

          <Link
            to="/"
            className="flex flex-row items-center gap-4 py-3 px-5 bg-primary rounded-full w-fit transition ease-in-out duration-300 hover:scale-110"
          >
            <span className="text-2xl">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
            <ArrowForwardIcon fontSize="large" />
          </Link>
        </div>

        {/* <div className="flex flex-row gap-5 relative px-3 py-2 mt-auto mb-6 w-fit">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-primary opacity-20 rounded-lg" />
          <span className="text-5xl font-semibold z-10">9.5</span>

          <div className="flex flex-col z-10">
            <span className="text-lg">Средняя оценка</span>
            <span className="text-sm mb-3">По последним опросам учеников</span>

            <Rating defaultValue={9.5} precision={0.5} max={10} readOnly />
          </div>
        </div> */}
      </div>

      <img
        className="w-2/5 mt-10 object-contain z-30 animate-slideInFromLeft"
        src={mainPhoto}
      />

      <span className="text-neutral-600 text-4xl font-semibold -rotate-45 absolute top-1/4 right-[45%] z-10 animate-opacityHidden hidden lg:block">
        Web
      </span>
      <span className="text-neutral-600 text-3xl font-semibold rotate-12 absolute top-[30%] right-[55%] z-10 animate-opacityHidden hidden lg:block">
        EF Core
      </span>
      <span className="text-neutral-600 text-3xl font-semibold rotate-12 absolute top-[43%] right-[57%] z-10 animate-opacityHidden hidden lg:block">
        CSS
      </span>
      <span className="text-neutral-600 text-6xl font-semibold absolute bottom-[5%] left-[5%] z-10 animate-opacityHidden hidden lg:block">
        C#
      </span>
      <span className="text-neutral-600 text-5xl font-semibold absolute top-[17%] right-[52%] z-10 animate-opacityHidden hidden lg:block">
        React
      </span>
      <span className="text-neutral-600 text-6xl font-semibold -rotate-12 absolute top-[5%] right-1/3 z-10 animate-opacityHidden hidden lg:block">
        .Net
      </span>
      <span className="text-neutral-600 text-4xl font-semibold rotate-6 absolute bottom-[20%] left-[15%] z-10 animate-opacityHidden hidden lg:block">
        TypeScript
      </span>
      <span className="text-neutral-600 text-3xl font-semibold -rotate-12 absolute bottom-[8%] right-[58%] z-10 animate-opacityHidden hidden lg:block">
        Docker
      </span>
      <span className="text-neutral-600 text-4xl font-semibold -rotate-12 absolute bottom-1/3 right-1/2 z-10 animate-opacityHidden hidden lg:block">
        ASP.NET Core
      </span>

      <div className="bg-primary w-[53%] pt-[53%] [clip-path:circle(65%_at_65%_65%)] z-20 absolute right-0 bottom-0" />
    </div>
  );
};

export default Cover;
