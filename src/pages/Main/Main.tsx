// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks";
// import { getSubscriptions } from "../../store/reducers/subscriptionSlice";

import Cover from "./components/Cover";

const Main = () => {
  //const dispatch = useAppDispatch();

  // const subscriptions = useAppSelector(
  //   (state) => state.subscription.subscriptions
  // );

  // useEffect(() => {
  //   dispatch(getSubscriptions());
  // }, []);

  return (
    <section className="flex flex-col items-center">
      <Cover />
    </section>
  );
};

export default Main;
