const TitleHeader = ({
  title,
  sub,
  className,
}: {
  title: string;
  sub: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 ${className ?? ""}`}
    >
      <div className="hero-badge">
        <p className="bg-gray-400/15 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap">
          {sub}
        </p>
      </div>
      <div>
        <h1 className="font-lufga font-bold text-primary text-2xl md:text-4xl lg:text-5xl px-8 md:px-0 text-center justify-center-end">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
