import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import mainPhoto from "../../../assets/images/mainPhoto.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import { Rating } from "@mui/material";

const Cover = () => {
  return (
    <div className="w-full lg:w-11/12 flex flex-col items-end sm:items-start sm:flex-row justify-between gap-5 md:gap-20 relative overflow-hidden bg-neutral-700 pl-3 sm:pl-7 xl:pl-14 pt-3 lg:pt-5 xl:pt-6 rounded-xl">
      <div className="w-full flex flex-col sm:gap-3 md:gap-5 z-30">
        <h1 className="text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-semibold whitespace-nowrap">
          .Net Fullstack
          <br /> курс
        </h1>

        <ul className="flex flex-row flex-wrap sm:divide-x text-neutral-400 items-center text-sm lg:text-lg mb-5 sm:mb-0">
          <li className="mb-5 sm:mb-0 sm:pr-2 w-full sm:w-fit xl:pr-3 whitespace-nowrap">
            Кирилл Сачков
          </li>
          <li className="inline-block border-r border-neutral-400 pr-2 sm:px-2 xl:px-3 after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link
              to="https://www.youtube.com/@KirillSachkov"
              className="flex flex-row gap-2 items-center md:py-2"
            >
              <Icon icon="mdi:youtube" width="28" className="hidden lg:block" />
              <Icon icon="mdi:youtube" width="20" className="block lg:hidden" />
              <span>YouTube</span>
            </Link>
          </li>
          <li className="inline-block px-2 xl:px-3 after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link
              to="https://t.me/sachkov_blog"
              className="flex flex-row gap-2 items-center md:py-2"
            >
              <Icon
                icon="ic:baseline-telegram"
                width="28"
                className="hidden lg:block"
              />
              <Icon
                icon="ic:baseline-telegram"
                width="20"
                className="block lg:hidden"
              />
              <span>Telegram</span>
            </Link>
          </li>
        </ul>

        <div className="lg:mt-12 flex flex-col gap-4 md:gap-10 xl:gap-20 pb-3 md:p-0">
          <ul className="list-disc flex flex-col gap-1 pl-4 lg:pl-6 text-sm lg:text-base xl:text-lg 2xl:text-xl">
            <li>Получишь опыт приближенный к коммерческому</li>
            <li>Получишь опыт разработки фулстак приложения с нуля</li>
            <li>Получишь пет-проект для портфолио</li>
            <li>Освоишь сложные принципы и концепции разаботки</li>
          </ul>

          <Link
            to="/"
            className="flex flex-row items-center gap-2 xl:gap-4 py-1 md:py-2 xl:py-3 px-2 md:px-3 xl:px-5 bg-primary rounded-full w-fit transition ease-in-out duration-300 hover:scale-110"
          >
            <span className="text-xs md:text-base lg:text-lg xl:text-2xl">
              БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
            </span>
            <ArrowForwardIcon className="w-6 h-6 xl:w-9 xl:h-9" />
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
        className="w-[77%] sm:w-2/5 sm:mt-10 object-contain z-30 animate-slideInFromLeft"
        src={mainPhoto}
      />

      <span className="text-neutral-600 text-2xl lg:text-3xl xl:text-4xl font-semibold -rotate-45 absolute top-1/3 sm:top-1/4 right-2/3 sm:right-[45%] z-10 animate-opacityHidden">
        Web
      </span>
      <span className="text-neutral-600 text-xl lg:text-2xl xl:text-3xl font-semibold rotate-12 absolute top-[30%] right-[15%] sm:right-[55%] z-10 animate-opacityHidden">
        EF Core
      </span>
      <span className="text-neutral-600 text-xl lg:text-2xl xl:text-3xl font-semibold rotate-12 absolute top-[43%] right-[57%] z-10 animate-opacityHidden">
        CSS
      </span>
      <span className="text-neutral-600 text-3xl lg:text-4xl xl:text-6xl font-semibold absolute bottom-1/2 left-[75%] sm:bottom-[5%] sm:left-[5%] z-10 animate-opacityHidden">
        C#
      </span>
      <span className="text-neutral-600 text-2xl lg:text-3xl xl:text-5xl font-semibold absolute top-[5%] sm:top-[10%] lg:top-[17%] right-[52%] z-10 animate-opacityHidden">
        React
      </span>
      <span className="text-neutral-600 text-3xl lg:text-4xl xl:text-6xl font-semibold -rotate-12 absolute top-[10%] right-[10%] sm:top-[5%] sm:right-1/3 z-10 animate-opacityHidden">
        .Net
      </span>
      <span className="text-neutral-600 text-2xl lg:text-3xl xl:text-4xl font-semibold -rotate-6 sm:rotate-6 absolute bottom-[40%] left-[10%] sm:bottom-[20%] sm:left-[15%] z-10 animate-opacityHidden">
        TypeScript
      </span>
      <span className="text-neutral-600 text-xl lg:text-2xl xl:text-3xl font-semibold -rotate-12 absolute bottom-[73%] right-[50%] sm:bottom-[8%] sm:right-[58%] z-10 animate-opacityHidden">
        Docker
      </span>
      <span className="text-neutral-600 whitespace-nowrap text-2xl lg:text-3xl xl:text-4xl font-semibold -rotate-12 absolute bottom-[80%] sm:bottom-1/3 right-1/2 z-10 animate-opacityHidden">
        ASP.NET Core
      </span>

      <div className="bg-primary w-full pt-[100%] sm:w-[53%] sm:pt-[53%] [clip-path:circle(65%_at_65%_65%)] z-20 absolute right-0 bottom-0" />
    </div>
  );
};

export default Cover;
