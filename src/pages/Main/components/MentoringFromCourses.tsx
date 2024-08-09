import { Icon } from "@iconify/react";

const MentoringFromCourses = () => {
  return (
    <div className="py-24 flex flex-col gap-20 items-center">
      <h2 className="text-4xl font-semibold">
        Чем <span className="uppercase text-primary">менторинг</span> отличается
        от обычных <span className="border-b-2 border-primary">курсов</span>?
      </h2>

      <ul className="grid grid-cols-2 gap-16">
        <li className="flex flex-col gap-4 items-center bg-neutral-700 rounded-xl">
          <div className="text-3xl font-bold uppercase bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-center rounded-t-xl py-3">
            менторинг
          </div>

          <ul className="py-5 px-8 flex flex-col gap-5 text-lg">
            <li>
              Стоимость от{" "}
              <span className="text-primary font-bold">7 500 ₽</span>
            </li>
            <li>
              Продолжительность{" "}
              <span className="text-primary font-bold">5 месяцев</span>
            </li>
            <li>
              <span className="border-b-2 border-primary">Три</span> занятия{" "}
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

        <li className="flex flex-col gap-4 items-center bg-neutral-700 rounded-xl">
          <div className="text-3xl font-bold uppercase bg-gradient-to-r from-cyan-900 to-green-300 w-full text-center rounded-t-xl py-3">
            КУРСЫ
          </div>

          <ul className="py-5 px-8 flex flex-col gap-5 text-lg">
            <li>
              Стоимость от{" "}
              <span className="text-neutral-400 font-bold">150 000 ₽</span>
            </li>
            <li>
              Продолжительность от{" "}
              <span className="text-neutral-400 font-bold">9 месяцев</span>
            </li>
            <li>
              <span className="border-b-2 border-neutral-400">Одно</span>{" "}
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
