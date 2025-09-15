import type { IButtonProps } from "../../types";

const Button = ({ className, label, onClick, children, ...props }: IButtonProps) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {label && label}
      {children && children}
    </button>
  );
};

export default Button;
