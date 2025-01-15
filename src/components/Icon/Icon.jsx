import icons from "/icons.svg";

export const Icon = ({ iconName, className }) => {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`${icons}#${iconName}`} />
    </svg>
  );
};
