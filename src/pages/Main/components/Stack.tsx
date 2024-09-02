import Fullstack from "../../../assets/images/fullstack.png";

const Stack = () => {
  const backend = [
    "C#",
    "Asp Net Core",
    "EF Core",
    "Dapper",
    "Postgresql",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "MinIO",
    "Fluent Validation",
    "CQRS",
    "Чистая архитектура",
    "Юнит и интеграционные тесты",
    "Аутентификация и авторизация",
    "DDD",
    "SignalR",
    "REST",
    "GRPC",
    "Telegram bot",
    "ElasticSearch",
    "Логирование",
    "Метрики",
  ];

  const frontend = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "React Hook Form",
    "Axios",
    "Tailwind",
    "MUI",
    "Vite",
  ];

  const infrastructure = [
    "Docker",
    "docker compose",
    "github actions",
    "nginx",
    "Монолитная и микросервесная архитектура",
    "Паттерны проектирования",
    "Git",
  ];

  return (
    <div className="flex flex-col items-center w-full py-16 gap-12">
      <h2 className="text-4xl font-semibold uppercase">Стек технологий</h2>

      <div className="flex flex-row justify-between px-16">
        <p className="text-lg w-1/2">
          Стэк очень обширный, мы затронем все этапы разработки реального
          проекта, начиная от проектирования и заканчивая деплоем на свой
          сервер. Всё для того, чтобы вы получили опыт, прямо как на работе. Вы
          разработаете полноценное веб приложение, состоящее из нескольких
          backend сервисов, написанных на{" "}
          <code className="bg-neutral-600 px-1 rounded-md">C#</code> и{" "}
          <code className="bg-neutral-600 px-1 rounded-md">ASP.NET Core</code>.
          Подробно изучите популярные и эффективные архитектурные подходы к
          разработке. Поработаете с различными базами данных, такими как{" "}
          <code className="bg-neutral-600 px-1 rounded-md">Postgresql</code> и{" "}
          <code className="bg-neutral-600 px-1 rounded-md">MongoDb</code>,
          освоите хранилище объектов и файлов{" "}
          <code className="bg-neutral-600 px-1 rounded-md">MinIO</code>,
          научитесь работать с{" "}
          <code className="bg-neutral-600 px-1 rounded-md">Redis</code>.
          Попрактикуетесь с{" "}
          <code className="bg-neutral-600 px-1 rounded-md">EF Core</code> и{" "}
          <code className="bg-neutral-600 px-1 rounded-md">Dapper</code>.
          Реализуете межсервисное взаимодействие с помощью{" "}
          <code className="bg-neutral-600 px-1 rounded-md">Kafka</code>,{" "}
          <code className="bg-neutral-600 px-1 rounded-md">GRPC</code> и{" "}
          <code className="bg-neutral-600 px-1 rounded-md">REST</code>. А также
          сделаете фронтенд часть с помощью{" "}
          <code className="bg-neutral-600 px-1 rounded-md">React</code>.
          Покроете всё{" "}
          <code className="bg-neutral-600 px-1 rounded-md">тестами</code> и
          развернёте проект в{" "}
          <code className="bg-neutral-600 px-1 rounded-md">Docker</code>.
        </p>

        <img src={Fullstack} alt="Fullstack." className="h-96" />
      </div>

      <ul className="flex flex-col gap-8">
        <li className="bg-neutral-700 rounded-xl flex flex-col w-full py-4 px-8 gap-4">
          <span className="text-3xl font-semibold">Backend</span>
          <ul className="flex flex-row flex-wrap gap-3">
            {backend.map((back, index) => (
              <li
                key={index}
                className="bg-neutral-600 rounded-lg px-3 py-1 flex flex-row items-center gap-2"
              >
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                <span className="text-lg">{back}</span>
              </li>
            ))}
          </ul>
        </li>

        <li className="bg-neutral-700 rounded-xl flex flex-col w-full py-4 px-8 gap-4">
          <span className="text-3xl font-semibold">Frontend</span>
          <ul className="flex flex-row flex-wrap gap-3">
            {frontend.map((front, index) => (
              <li
                key={index}
                className="bg-neutral-600 rounded-lg px-3 py-1 flex flex-row items-center gap-2"
              >
                <div className="w-4 h-4 rounded-full bg-primary" />
                <span className="text-lg">{front}</span>
              </li>
            ))}
          </ul>
        </li>

        <li className="bg-neutral-700 rounded-xl flex flex-col w-full py-4 px-8 gap-4">
          <span className="text-3xl font-semibold">Инфраструктура</span>
          <ul className="flex flex-row flex-wrap gap-3">
            {infrastructure.map((back, inf) => (
              <li
                key={inf}
                className="bg-neutral-600 rounded-lg px-3 py-1 flex flex-row items-center gap-2"
              >
                <div className="w-4 h-4 rounded-full bg-lime-500" />
                <span className="text-lg">{back}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Stack;
