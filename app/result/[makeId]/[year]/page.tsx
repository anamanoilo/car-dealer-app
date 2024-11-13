import { Suspense } from 'react';

type VehicleModel = {
  Make_ID: number;
 Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

async function getVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    { cache: 'no-store' }
  );
  const data = await res.json();
  console.log('data.Results:', data.Results);
  return data.Results || [];
}

export default async function ResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = params;
  const models = await getVehicleModels(makeId, year);
  console.log('models:', models);

  return (
    <Suspense fallback={<div>Loading models...</div>}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Models for {makeId} in {year}
        </h1>
        {models.length === 0 ? (
          <p>No models found for the selected make and year.</p>
        ) : (
          <ul className="list-disc pl-5">
            {models.map((model) => (
              <li key={model.Model_ID}>{model.Model_Name}</li>
            ))}
          </ul>
        )}
      </div>
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [];
}