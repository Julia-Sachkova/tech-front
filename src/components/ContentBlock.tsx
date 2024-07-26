export type Props = {
  children: React.ReactNode;
};

const ContentBlock = (props: Props) => {
  return (
    <div className="w-full bg-neutral-700 rounded-xl">{props.children}</div>
  );
};

export default ContentBlock;
