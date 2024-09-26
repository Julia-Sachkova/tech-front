import { Icon } from "@iconify/react";

const MentoringFromCourses = () => {
  return (
    <div className="py-24 flex flex-col gap-20 items-center">
      <h2 className="text-4xl font-semibold">
        Чем <span className="text-primary">мы</span> отличаемся от других{" "}
        курсов?
      </h2>

      <ul className="grid grid-cols-2 gap-16">
        <li className="flex flex-col gap-4 items-center bg-neutral-700 rounded-xl transition ease-in-out duration-300 hover:scale-110">
          <div className="text-3xl font-bold uppercase bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-center rounded-t-xl py-3">
            наш курс
          </div>

          <ul className="py-5 px-8 flex flex-col gap-5 text-lg">
            <li>
              При покупке получаешь
              <br />
              доступ <span className="text-primary font-bold">навсегда</span>
            </li>
            <li>
              Буду заниматься с тобой, пока не <br />
              <span className="text-primary font-bold">трудоустроишься</span>
            </li>
            <li>
              В среднем:
              <br />
              <span className="border-b-2 border-primary">
                три
              </span> занятия{" "}
              <span className="border-b-2 border-primary">в неделю</span>
            </li>
            <li>
              Помощь и поддержка в{" "}
              <span className="border-b-2 border-primary">тг чате</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <span>Подготовка к собеседованию</span>
              <Icon
                icon="mingcute:check-2-line"
                width="24"
                height="24"
                color="var(--primary)"
              />
            </li>
            <li className="flex flex-row items-center gap-2">
              <span>Помощь в составлении резюме</span>
              <Icon
                icon="mingcute:check-2-line"
                width="24"
                height="24"
                color="var(--primary)"
              />
            </li>
          </ul>
        </li>

        <li className="flex flex-col gap-4 items-center bg-neutral-700 rounded-xl transition ease-in-out duration-300 hover:scale-110">
          <div className="text-3xl font-bold uppercase bg-gradient-to-r from-cyan-900 to-green-300 w-full text-center rounded-t-xl py-3">
            другие курсы
          </div>

          <ul className="py-5 px-8 flex flex-col gap-5 text-lg">
            <li>
              При покупке получаешь
              <br />
              доступ на{" "}
              <span className="text-neutral-400 font-bold">6-16 месяцев</span>
            </li>
            <li>
              Будут заниматься с тобой, пока не <br />
              <span className="text-neutral-400 font-bold">
                закончится курс
              </span>
            </li>
            <li>
              В среднем:
              <br />
              <span className="border-b-2 border-neutral-400">одно</span>{" "}
              занятие раз{" "}
              <span className="border-b-2 border-neutral-400">
                в одну-две недели
              </span>
            </li>
            <li>
              Обычная поддержка{" "}
              <span className="border-b-2 border-neutral-400">на сайте</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <span>Подготовка к собеседованию</span>
              <Icon
                icon="iconamoon:close-bold"
                width="24"
                height="24"
                color="red"
              />
            </li>
            <li className="flex flex-row items-center gap-2">
              <span>Помощь в составлении резюме</span>
              <Icon
                icon="iconamoon:close-bold"
                width="24"
                height="24"
                color="red"
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MentoringFromCourses;
