interface PTSectionNameProps {
  title: string;
  description: string;
}
const PTSectionName = ({ title, description }: PTSectionNameProps) => {
  return (
    <>
      <div className=" text-center">
        <h1 className=" text-5xl font-bold leading-14 text-primary">{title}</h1>
        <p className=" text-primary text-lg leading-7 mt-4 opacity-70">
          {description}
        </p>
      </div>
    </>
  );
};

export default PTSectionName;
