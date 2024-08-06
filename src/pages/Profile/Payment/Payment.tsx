import { Icon } from "@iconify/react";
import { Button, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const Payment = () => {
  const subscribe = {
    title: "Менторинг .Net",
    endDate: "08/20/2024",
    price: "15000",
    whatIsIncluded: [
      "Возможность посещать занятия",
      "Ревью заданий + обратная свзяь",
      "Записи занятий",
      "Доступ к закрытому чату",
      "Mock собеседования",
      "Помощь в составлении резюме",
      "Помощь в поиске работы",
    ],
    auto: true,
  };

  const [checked, setChecked] = useState(subscribe.auto);

  const restOfDays = () => {
    const firstDate = new Date();
    const secondDate = new Date(subscribe.endDate);

    const firstDateInMs = firstDate.getTime();
    const secondDateInMs = secondDate.getTime();

    const differenceBtwDates = secondDateInMs - firstDateInMs;

    const aDayInMs = 24 * 60 * 60 * 1000;

    return Math.round(differenceBtwDates / aDayInMs);
  };

  const numberWithSpaces = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleChangeAuto = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-3xl">{subscribe.title}</h3>

      <div className="flex flex-row gap-10">
        <ul className="flex flex-col gap-5">
          <li className="flex flex-row items-center gap-4">
            <Icon
              icon="material-symbols:calendar-clock-outline"
              width="28"
              height="28"
            />

            <span className="text-lg uppercase font-light">
              Остаток дней -{" "}
              <span className="text-primary font-bold text-xl">
                {restOfDays()}
              </span>
            </span>
          </li>

          <li className="flex flex-row items-center gap-4">
            <Icon icon="ri:price-tag-3-line" width="28" height="28" />

            <span className="text-xl uppercase">
              {numberWithSpaces(Number(subscribe.price))}{" "}
              <span className="font-thin text-lg">руб</span>
            </span>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <span className="text-xl">Что включено в подписку:</span>

          <ul className="flex flex-col gap-2">
            {subscribe.whatIsIncluded.map((inc, index) => (
              <li key={index} className="flex flex-row gap-2 items-center">
                <Icon
                  icon="mingcute:check-2-line"
                  width="20"
                  height="20"
                  color="var(--primary)"
                />
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FormControlLabel
        control={
          <Switch checked={checked} onChange={handleChangeAuto} name="auto" />
        }
        label="Автопродление"
      />

      <div className="flex flex-row gap-4">
        <Button variant="contained">ИЗМЕНИТЬ ПОДПИСКУ</Button>
        <Button color="error" variant="outlined">
          ОТМЕНИТЬ ПОДПИСКУ
        </Button>
      </div>
    </div>
  );
};

export default Payment;
