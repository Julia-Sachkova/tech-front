// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks";
// import { getSubscriptions } from "../../store/reducers/subscriptionSlice";

import AboutProfession from "./components/AboutProfession";
import ConsistOf from "./components/ConsistOf";
import Cover from "./components/Cover";
// import MentoringFromCourses from "./components/MentoringFromCourses";
import ShortAbout from "./components/ShortAbout";
import Stack from "./components/Stack";
import WhatWillYouGet from "./components/WhatWillYouGet";
import WillSuit from "./components/WillSuit";

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
      <ShortAbout />
      <AboutProfession />
      {/* <MentoringFromCourses /> */}
      <WillSuit />
      <ConsistOf />
      <Stack />
      <WhatWillYouGet />
    </section>
  );
};

export default Main;
