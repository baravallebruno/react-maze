import { ChangeEvent } from "react";
import { Character, Level } from "../../types/common";

type RadioProps<T> = {
  value: T;
  name: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (value: T) => void;
};

const Radio = <T extends Level | Character>({
  value,
  name,
  label,
  checked = false,
  disabled = false,
  onChange,
}: RadioProps<T>): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEvent = event.target.value as T;
    onChange(newEvent);
  };

  return (
    <li className="flex items-center mb-3">
      <input
        type="radio"
        value={value}
        name={name}
        className="hidden peer"
        id={value}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      <label
        className="items-center justify-between w-full p-2 text-white border-4 border-white cursor-pointer peer-disabled:cursor-not-allowed peer-checked:border-alien-yellow peer-checked:text-alien-yellow font-maze-font text-2xl"
        htmlFor={value}
      >
        {label}
      </label>
    </li>
  );
};

export default Radio;
