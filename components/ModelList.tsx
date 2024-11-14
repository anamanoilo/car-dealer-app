import { VehicleModel } from "@/app/types";

type ModelsListProps = {
  models: VehicleModel[];
};

export const ModelList: React.FC<ModelsListProps> = ({ models }) => {
  return (
    <ul className="grid gap-6">
      {models.map((model) => (
        <li key={model.Model_ID} className="rounded-lg bg-gray-300 p-4 shadow-lg">
          <p className="text-lg font-semibold text-gray-800">{model.Model_Name}</p>
        </li>
      ))}
    </ul>
  );
};
