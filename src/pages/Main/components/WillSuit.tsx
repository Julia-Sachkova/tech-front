import Fullstack from "../../../assets/images/fullstack.png";

const WillSuit = () => {
  const texts = [
    "Ты знаешь базу С#: умеешь работать с классами, коллекциями, условиями, циклами, интерфейсами, понимаешь базовые принципы ООП",
    "Готов уделять обучению 10+ часов в неделю",
    "Хочешь освоить профессию .Net Fullstack разработчика и найти работу",
    "Хочешь освежить или укрепить уже имеющиеся знания",
    "Ты уже бэкенд- или фронтенд-разработчик и хочешь расширить сферу деятельности",
  ];

  return (
    <div className="w-full flex flex-col gap-12 border-y-2 pt-6 pb-10 px-16">
      <h2 className="text-5xl font-semibold">Тебе подойдет курс, если:</h2>

      <div className="flex flex-row justify-between gap-16">
        <img src={Fullstack} alt="Fullstack." className="h-96" />

        <ul className="flex flex-col gap-5 w-1/2">
          {texts.map((text, index) => (
            <li key={index} className="flex flex-row items-center gap-4">
              <span className="text-primary text-5xl font-semibold">
                {index + 1}
              </span>
              <span className="text-2xl">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WillSuit;
