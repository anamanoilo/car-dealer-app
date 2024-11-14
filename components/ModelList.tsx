import { VehicleModel } from "@/app/types";
import { v4 as uuidv4 } from 'uuid';

type ModelsListProps = {
  models: VehicleModel[];
};

export const ModelList: React.FC<ModelsListProps> = ({ models }) => {
  return (
    <ul className="max-w-2xl mx-auto grid gap-6">
      {models.map((model) => (
        <li key={uuidv4()} className="rounded-lg bg-gray-300 p-4 shadow-lg">
          <p className="text-lg font-semibold text-gray-800">{model.Model_Name}</p>
        </li>
      ))}
    </ul>
  );
};
