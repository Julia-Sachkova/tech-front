import { ThreeDots } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
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
    </div>
  );
};

export default Preloader;
