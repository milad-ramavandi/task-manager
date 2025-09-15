import type { IInputProps } from "../../types";

const Input = ({ className, classNameContainer, label, error, register, ...props }: IInputProps) => {
  return (
    <div className={classNameContainer && classNameContainer}>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        className={className}
        {...register}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
