import { VehicleModel } from "@/app/types";

type ModelsListProps = {
  models: VehicleModel[];
}

export const ModelList: React.FC<ModelsListProps> = ({ models }) => {
  return (
    <ul className="grid gap-6">
      {models.map((model) => (
        <li
          key={model.Model_ID}
          className="bg-gray-300 shadow-lg rounded-lg p-4"
        >
          <p className="text-lg font-semibold text-gray-800">{model.Model_Name}</p>
        </li>
      ))}
    </ul>
  );
};
