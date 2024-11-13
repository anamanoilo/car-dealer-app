import { VehicleModel } from "@/app/types"

async function getVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      { cache: "no-store" }
    )

    if (!res.ok) {
      console.error(`Failed to fetch vehicle models: ${res.statusText}`)
      return []
    }

    const data: { Results?: VehicleModel[] } = await res.json()

    if (!data.Results) {
      console.warn("No Results property in the API response")
      return []
    }

    console.log("data.Results:", data.Results)
    return data.Results
  } catch (error) {
    console.error("Failed to fetch vehicle models:", error)
    return []
  }
}

export { getVehicleModels }
