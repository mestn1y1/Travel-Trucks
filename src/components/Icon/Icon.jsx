import icons from "/symbol-defs.svg";

export const Icon = ({ iconName, className }) => {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`${icons}#icon-${iconName}`} />
    </svg>
  );
};
