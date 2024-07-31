import { ThreeDots } from "react-loader-spinner";

const Preloader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="var(--primary)"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Preloader;
