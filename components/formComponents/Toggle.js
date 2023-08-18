import clsx from "clsx";

const Toggle = ({
  label,
  onClick,
  color = "secondary"
}) => {
  return (
    <input onClick={onClick} type="checkbox" className={clsx("toggle", "toggle-" + color)} />
  );
};

export default Toggle;
