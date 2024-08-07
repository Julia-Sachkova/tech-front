import { createSlice } from "@reduxjs/toolkit";
import { Subscription } from "../../types/Subscription";

interface SubscriptionState {
  subscriptions: Subscription[];
}

const initialState: SubscriptionState = {
  subscriptions: [],
};

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    getSubscriptions: (state) => {
      state.subscriptions = [
        {
          id: "0",
          title: "Менторинг .Net",
          duration: "1 месяц",
          price: 15000,
          whatIsIncluded: [
            "Возможность посещать занятия",
            "Ревью заданий + обратная свзяь",
            "Записи занятий",
            "Доступ к закрытому чату",
            "Mock собеседования",
            "Помощь в составлении резюме",
            "Помощь в поиске работы",
          ],
        },
        {
          id: "1",
          title: "Менторинг .Net",
          duration: "2 недели",
          price: 7500,
          whatIsIncluded: [
            "Возможность посещать занятия",
            "Ревью заданий + обратная свзяь",
            "Записи занятий",
            "Доступ к закрытому чату",
            "Mock собеседования",
            "Помощь в составлении резюме",
            "Помощь в поиске работы",
          ],
        },
        {
          id: "2",
          title: "Записи менторинга. Блок 1 - Проектирование и архитектура",
          duration: "Не ограничено",
          price: 10000,
          whatIsIncluded: [
            "Записи занятий по установке проекта, настройке и построению архитектруы проекта",
            "Доступ к чату, где можно обсуждать записи и задавать вопросы",
          ],
        },
        {
          id: "3",
          title: "Записи менторинга. Блок 2 - Авторизация на бэкэнде",
          duration: "Не ограничено",
          price: 10000,
          whatIsIncluded: [
            "Записи занятий с полным разбором и написанием авторизации на стороне бэкенда",
            "Доступ к чату, где можно обсуждать записи и задавать вопросы",
          ],
        },
        {
          id: "4",
          title: "Записи менторинга. Блок 3- Основы верстки",
          duration: "Не ограничено",
          price: 10000,
          whatIsIncluded: [
            "Записи занятий по основам HTML и CSS",
            "Доступ к чату, где можно обсуждать записи и задавать вопросы",
          ],
        },
      ];
    },
  },
});

export const { getSubscriptions } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
