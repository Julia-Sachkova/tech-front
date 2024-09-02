const WhatWillYouGet = () => {
  const gets = [
    {
      title: "Опыт, максимально приближенный к коммерческому",
      desc: "Будешь работать над проектом, выполняя поставленные задачи в условиях, как на реальной работе",
    },
    {
      title: "Освоишь современные технологии",
      desc: "Научишься работать с современным стеком на .Net и React на практике",
    },
    {
      title: "Готовый проект",
      desc: "По итогу у тебя будет большой проект для портфолио, который станет твоей визитной карточкой",
    },
    {
      title: "Освоишь запуск и деплой проекта",
      desc: "Ты пройдешь весь путь создания проекта - от создания репозитория до подготовки к запуску и деплоя",
    },
  ];

  return (
    <div className="w-full border-y-2 py-8 mx-10 flex flex-col gap-16">
      <h2 className="text-5xl font-semibold">
        Что ты получишь за время обучения
      </h2>

      <ul className="grid grid-cols-2 gap-6 px-16">
        {gets.map((get, index) => (
          <li
            key={index}
            className="bg-neutral-700 drop-shadow-xl px-6 py-5 rounded-xl flex flex-col gap-3"
          >
            <h4 className="text-3xl font-semibold">{get.title}</h4>
            <span className="text-xl">{get.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatWillYouGet;
