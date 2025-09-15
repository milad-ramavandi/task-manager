import type { ISelectProps } from "../../types";

const Select = ({
  className,
  label,
  options,
  register,
  error,
  ...props
}: ISelectProps) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        {...register}
        {...props}
        list="categories"
        className={className}
      />

      <datalist id="categories">
        {options?.map((o) => (
          <option key={o.label} value={o.value}>
            {o.label}
          </option>
        ))}
      </datalist>

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default Select;
