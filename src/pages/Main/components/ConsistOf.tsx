import Task from "../../../assets/images/task.jpg";
import Review from "../../../assets/images/review.jpg";
import Chat from "../../../assets/images/chat.png";
import LessonDs from "../../../assets/images/lesson-ds.jpg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ConsistOf = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16 bg-neutral-700 pt-16 pb-8 px-6">
      <h2 className="text-5xl font-semibold uppercase">Из чего состоит курс</h2>
      {/* 
      <ul className="flex flex-row gap-6">
        <li className="text-xl flex flex-row items-end gap-2 bg-neutral-600 rounded-xl p-4">
          <span className="text-5xl font-semibold">24</span>
          <span className="leading-none">
            часа занятий
            <br />в месяц
          </span>
        </li>
        <li className="text-xl flex flex-row items-end gap-2 bg-neutral-600 rounded-xl p-4">
          <span className="text-5xl font-semibold">100</span>
          <span className="leading-none">
            и более
            <br />
            заданий
          </span>
        </li>
        <li className="text-xl flex flex-row items-end gap-2 bg-neutral-600 rounded-xl p-4">
          <span className="text-5xl font-semibold">38</span>
          <span className="leading-none">
            современных
            <br />
            технологий
          </span>
        </li>
      </ul> */}

      <ul className="flex flex-col gap-16 pt-10">
        <li className="flex flex-row gap-12">
          <img
            src={LessonDs}
            alt="занятие."
            className="h-96 w-1/2 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-3xl font-semibold">Онлайн занятия</h3>
            <p className="text-lg">
              В среднем занятия проводятся 3 раза в неделю. Ты можешь
              присутствовать на занятиях и задавать любые вопросы. Все
              непонятные и сложные моменты мы обязательно разберем.
            </p>

            <Accordion sx={{ backgroundColor: "transparent" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Что конкретно будет на занятиях?
              </AccordionSummary>
              <AccordionDetails>
                <ul className="list-disc pl-6 flex flex-col gap-4">
                  <li>
                    <span className="font-bold">Работа над проектом.</span> Я
                    буду разрабатывать проект с нуля, в котором буду применять
                    все свои знания и актуальный стэк, объясняя и разжёвывая все
                    темы. Все это ты сможешь внедрить в свой проект
                  </li>
                  <li>
                    <span className="font-bold">Разбор сложных тем.</span> На
                    занятиях мы регулярно разбираем сложные темы и технологии
                  </li>
                  <li>
                    <span className="font-bold">Лучшии практики.</span> Я буду
                    показывать, как писать код, придерживаясь лучших практик,
                    чтобы твой код был чистым, читаемым, поддерживаемым, легко
                    расширяемым и тестируемым
                  </li>
                  <li>
                    <span className="font-bold">Разбор репозиториев.</span> На
                    занятиях я могу разбирать репозитории учеников, указывая на
                    их ошибки и давая советы по улучшению
                  </li>
                  <li>
                    <span className="font-bold">Моковые собеседования.</span>{" "}
                    Некоторые занятия я буду посвящать мок собеседованиям, чтобы
                    ты мог успешно подготовиться к реальным собеседованиям
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </li>

        <li className="flex flex-row gap-12">
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-3xl font-semibold">Задания</h3>
            <p className="text-lg">
              Самая важная часть обучения - это практика. Поэтому ты будешь
              разрабатывать пет-проект. Я уже придумал идею проекта и полностью
              спроектировал его, поэтому я буду выступать в роли тим-лида.
            </p>

            <Accordion sx={{ backgroundColor: "transparent" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Подробнее о заданиях
              </AccordionSummary>
              <AccordionDetails className="flex flex-col gap-4">
                <p>
                  Задания поделены на бэкенд и фронтенд части, ты можешь
                  выполнять их параллельно, но обязательно в том порядке, в
                  каком они указаны.
                </p>
                <p>
                  Ты можешь выполнять задания в удобном для тебя темпе, никаких
                  дедлайнов тут нет. Сдавать задания на проверку ты будешь, как
                  на реальной работе, в виде пулл-реквеста на GitHub.
                </p>
                <p>
                  В процессе проведения новых занятий, задания могут изменяться
                  и дополняться.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <img
            src={Task}
            alt="занятие."
            className="h-96 w-1/2 object-cover rounded-lg"
          />
        </li>

        <li className="flex flex-row gap-12">
          <img
            src={Review}
            alt="занятие."
            className="h-96 w-1/2 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-3xl font-semibold">Ревью кода</h3>
            <p className="text-lg">
              После того, как ты выполнишь задание и создашь пулл-реквест, я
              буду проводить код-ревью. Я буду проверять твой код, указывать на
              ошибки и места, где можно что-то улучшить или доработать. В итоге
              ты будешь получать полную обратную связь по своему коду.
            </p>
          </div>
        </li>

        <li className="flex flex-row gap-12">
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-3xl font-semibold">Общие чаты</h3>
            <p className="text-lg">
              Ты сразу получишь доступ к чату в телеграме и серверу в дискорде.
              Там буду я и все остальные ученики. Там ты сможешь задавать
              вопросы, общаться в любое время, делать задачи в команде,
              проводить доклады и собеседования, а также помогать другим,
              отвечая на их вопросы.
            </p>
          </div>
          <img
            src={Chat}
            alt="занятие."
            className="h-96 w-1/2 object-cover rounded-lg"
          />
        </li>
      </ul>
    </div>
  );
};

export default ConsistOf;
