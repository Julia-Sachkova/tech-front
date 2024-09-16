import { Icon } from "@iconify/react";

const ShortAbout = () => {
  const about = [
    {
      title: "Интенсивное обучение и практика",
      icon: "mdi:run-fast",
    },
    {
      title: "Современный стек",
      icon: "uil:arrow-growth",
    },
    {
      title: "Регулярное код-ревью",
      icon: "mdi:rate-review",
    },
    {
      title: "Помощь в составлении резюме",
      icon: "mdi:resume",
    },
    {
      title: "Сообщество мотивированных учеников",
      icon: "fluent:people-community-28-filled",
    },
    {
      title: "Подготовка к собеседованию",
      icon: "carbon:question-answering",
    },
  ];

  return (
    <ul className="w-full xl:w-11/12 grid grid-cols-2 lg:grid-cols-3 mb-14 mt-5">
      {about.map((ab, index) => (
        <li
          key={index}
          className="flex flex-col sm:flex-row gap-5 items-center px-3 lg:px-5 xl:px-8 py-3 xl:py-4"
        >
          <div className="bg-primary p-2 rounded-full">
            <Icon
              icon={ab.icon}
              width="20"
              height="20"
              className="block lg:hidden"
            />
            <Icon
              icon={ab.icon}
              width="28"
              height="28"
              className="hidden lg:block"
            />
          </div>

          <span className="text-center sm:text-left lg:text-lg xl:text-xl">
            {ab.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ShortAbout;
