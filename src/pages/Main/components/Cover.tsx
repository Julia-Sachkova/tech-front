import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import mainPhoto from "../../../assets/images/mainPhoto.png";
//import { Rating } from "@mui/material";

const Cover = () => {
  return (
    <div className="w-11/12 flex flex-row justify-between gap-20 relative overflow-hidden bg-neutral-700 pl-14 pt-6 rounded-xl">
      <div className="flex flex-col gap-5 z-20">
        <h1 className="text-6xl font-semibold">
          Менторинг .Net
          <br /> Fullstack
        </h1>

        <ul className="flex flex-row divide-x text-neutral-400 items-center text-lg">
          <li className="pr-3">Кирилл Сачков</li>
          <li className="inline-block px-3 after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link
              to="https://www.youtube.com/@KirillSachkov"
              className="flex flex-row gap-2 items-center py-2"
            >
              <Icon icon="mdi:youtube" width="28" />
              <span>YouTube</span>
            </Link>
          </li>
          <li className="inline-block px-3 after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100">
            <Link
              to="https://t.me/sachkov_blog"
              className="flex flex-row gap-2 items-center pl-3 py-2"
            >
              <Icon icon="ic:baseline-telegram" width="28" />
              <span>Telegram</span>
            </Link>
          </li>
        </ul>

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
        className="w-[500px] h-[500px] object-contain z-30 absolute -right-10 -bottom-7 animate-slideInFromLeft"
        src={mainPhoto}
      />

      <span className="text-neutral-600 text-4xl font-semibold -rotate-45 absolute top-1/3 right-[45%] z-10 animate-opacityHidden">
        Web
      </span>
      <span className="text-neutral-600 text-3xl font-semibold rotate-12 absolute top-10 right-[48%] z-10 animate-opacityHidden">
        EF Core
      </span>
      <span className="text-neutral-600 text-3xl font-semibold rotate-12 absolute top-[43%] right-[57%] z-10 animate-opacityHidden">
        CSS
      </span>
      <span className="text-neutral-600 text-6xl font-semibold absolute top-1/2 right-[40%] z-10 animate-opacityHidden">
        C#
      </span>
      <span className="text-neutral-600 text-5xl font-semibold absolute top-32 right-[52%] z-10 animate-opacityHidden">
        React
      </span>
      <span className="text-neutral-600 text-6xl font-semibold -rotate-12 absolute top-20 right-1/3 z-10 animate-opacityHidden">
        .Net
      </span>
      <span className="text-neutral-600 text-4xl font-semibold rotate-12 absolute bottom-20 right-[40%] z-10 animate-opacityHidden">
        TypeScript
      </span>
      <span className="text-neutral-600 text-3xl font-semibold -rotate-12 absolute bottom-16 right-[58%] z-10 animate-opacityHidden">
        Docker
      </span>
      <span className="text-neutral-600 text-4xl font-semibold -rotate-12 absolute bottom-1/3 right-1/2 z-10 animate-opacityHidden">
        ASP.NET Core
      </span>

      <div className="bg-primary w-[500px] h-[500px] [clip-path:circle(65%_at_65%_65%)] z-20" />
    </div>
  );
};

export default Cover;
