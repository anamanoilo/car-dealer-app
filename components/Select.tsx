import { ChangeEvent } from "react";

type Option = {
  id: number;
  name: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({ label, options, selectedValue, onValueChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onValueChange(e.target.value as string);
  };
  return (
    <div>
      <label className="mb-2 block text-gray-100">{label}</label>
      <select
        className="w-full rounded bg-white p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
