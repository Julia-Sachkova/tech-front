// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks";
// import { getSubscriptions } from "../../store/reducers/subscriptionSlice";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import mainPhoto from "../../assets/images/mainPhoto.png";
import { Rating } from "@mui/material";

const Main = () => {
  //const dispatch = useAppDispatch();

  // const subscriptions = useAppSelector(
  //   (state) => state.subscription.subscriptions
  // );

  // useEffect(() => {
  //   dispatch(getSubscriptions());
  // }, []);

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row gap-20 relative overflow-hidden">
        <div className="flex flex-col gap-5">
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

          <div className="flex flex-row gap-5 relative px-3 py-2 mt-auto mb-0 w-fit">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-primary opacity-20 rounded-lg -z-10" />
            <span className="text-5xl font-semibold">9.5</span>

            <div className="flex flex-col">
              <span className="text-lg">Средняя оценка</span>
              <span className="text-sm mb-3">
                По последним опросам учеников
              </span>

              <Rating defaultValue={9.5} precision={0.5} max={10} readOnly />
            </div>
          </div>
        </div>

        <img
          className="w-[450px] h-[450px] object-contain z-10 absolute -right-10 -bottom-6"
          src={mainPhoto}
        />

        <div className="bg-primary w-[450px] h-[450px] [clip-path:circle(65%_at_65%_65%)]" />
      </div>
    </section>
  );
};

export default Main;
