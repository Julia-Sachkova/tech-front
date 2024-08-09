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
      title: "Составлении резюме",
      icon: "mdi:resume",
    },
    {
      title: "Сообщество учеников, таких же, как ты",
      icon: "fluent:people-community-28-filled",
    },
    {
      title: "Подготовка к собеседованию",
      icon: "carbon:question-answering",
    },
  ];

  return (
    <ul className="py-8 grid grid-cols-3">
      {about.map((ab, index) => (
        <li key={index} className="flex flex-row gap-3 items-center px-8 py-3">
          <div className="bg-primary p-2 rounded-full">
            <Icon icon={ab.icon} width="28" height="28" />
          </div>

          <span className="text-xl">{ab.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default ShortAbout;
