import { VehicleMake, VehicleModel } from "@/app/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL environment variable is not set")
}
const VEHICLE_MODELS_ENDPOINT = `${API_URL}/vehicles/GetModelsForMakeAndYear?format=json`

async function getVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
  try {
    const res = await fetch(`${VEHICLE_MODELS_ENDPOINT}&makeId=${makeId}&year=${year}`, { cache: "no-store" })

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

async function fetchVehicleMakes(): Promise<VehicleMake[]> {
  const res = await fetch(`${API_URL}/vehicles/GetMakesForVehicleType/car?format=json`)
  const data = await res.json()
  return data.Results
}

export { getVehicleModels, fetchVehicleMakes }
