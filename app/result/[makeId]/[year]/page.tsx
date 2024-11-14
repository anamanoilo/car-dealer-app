import { Suspense } from "react";
import { getVehicleModels, getVehicleMakes } from "@/app/api/vehicleService";
import { ModelList } from "@/components/ModelList";
import { generateModelYearsList } from "@/utils/generateModelYearsList";

export async function generateStaticParams() {
  const makes = await getVehicleMakes();
  const makeIds = makes.map((make) => make.MakeId);
  const modelYears = generateModelYearsList();
  const params = makeIds.flatMap((makeId) =>
    modelYears.map((year) => ({
      makeId: makeId.toString(),
      year: year.toString(),
    }))
  );

  return params;
}

type Params = Promise<{ makeId: string; year: string }>;

export default async function ResultPage({ params }: { params: Params }) {
  const { makeId, year } = await params;
  const models = await getVehicleModels(makeId, year);
  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-center text-2xl font-bold">Vehicle models in {year}</h2>
      <Suspense fallback={<div>Loading models...</div>}>
        {models?.length ? <ModelList models={models} /> : <p>No models found for the selected make and year.</p>}
      </Suspense>
    </div>
  );
}
