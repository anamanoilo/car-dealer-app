import { Suspense } from "react"
import { getVehicleModels } from "@/app/api/vehicleService"

export default async function ResultPage({ params }: { params: { makeId: string; year: string } }) {
  const { makeId, year } = await params
  const models = await getVehicleModels(makeId, year)
  return (
    <Suspense fallback={<div>Loading models...</div>}>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">
          Models in {year}
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
  )
}

