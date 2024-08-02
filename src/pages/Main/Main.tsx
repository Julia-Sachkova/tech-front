import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  getMainTask,
  getNextLesson,
} from "../../store/reducers/mainUserDataSlice";
import ContentBlock from "../../components/ContentBlock";
import { Icon } from "@iconify/react";

const Main = () => {
  const dispatch = useAppDispatch();

  const mainTask = useAppSelector((state) => state.mainUserData.mainTask);
  const nextLesson = useAppSelector((state) => state.mainUserData.nextLesson);

  useEffect(() => {
    dispatch(getMainTask());
    dispatch(getNextLesson());
  }, []);

  return (
    <section>
      <ContentBlock>
        <div className="flex flex-row px-6 py-5 gap-8">
          <div className="bg-neutral-600 rounded-xl drop-shadow-xl">
            <div className="bg-primary px-4 py-2 rounded-t-xl flex flex-row gap-3 items-center">
              <Icon icon="gg:check-r" height="30" width="30" />
              <h4 className="text-2xl font-semibold">
                Сейчас ты делаешь это задание
              </h4>
            </div>

            <div className="px-4 py-2">
              <span>{mainTask.name}</span>
            </div>
          </div>

          <div className="bg-neutral-600 rounded-xl drop-shadow-xl">
            <div className="bg-primary px-4 py-2 rounded-t-xl flex flex-row gap-3 items-center">
              <Icon
                icon="material-symbols:date-range-outline"
                height="32"
                width="32"
              />
              <h4 className="text-2xl font-semibold">
                Не пропусти следующее занятие
              </h4>
            </div>

            <div className="px-4 py-2">
              <span>{nextLesson.date}</span>
            </div>
          </div>
        </div>
      </ContentBlock>
    </section>
  );
};

export default Main;
