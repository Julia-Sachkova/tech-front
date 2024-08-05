export type props = {
  text: string;
};

const Empty = (props: props) => {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="px-3 py-2 bg-neutral-600 rounded-md drop-shadow-lg text-lg">
        {props.text}
      </div>
    </section>
  );
};

export default Empty;
