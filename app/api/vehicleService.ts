import { VehicleMake, VehicleModel } from "@/app/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL environment variable is not set");
}
const VEHICLE_MODELS_ENDPOINT = `${API_URL}/vehicles/GetModelsForMakeIdYear`;
const VEHICLE_TYPES_ENDPOINT = `${API_URL}/vehicles/GetMakesForVehicleType/car`;

const params = new URLSearchParams({
  format: "json",
});

async function getVehicleModels(makeId: string, year: string): Promise<VehicleModel[]> {
  try {
    const res = await fetch(`${VEHICLE_MODELS_ENDPOINT}/makeId/${makeId}/modelyear/${year}?${params}`);
    return await handleFetchResponse<VehicleModel[]>(res);
  } catch (error) {
    console.error("Failed to fetch vehicle models:", error);
    throw new Error("Something went wrong");
  }
}

async function getVehicleMakes(): Promise<VehicleMake[]> {
  try {
    const res = await fetch(`${VEHICLE_TYPES_ENDPOINT}?${params}`);
    return await handleFetchResponse<VehicleMake[]>(res);
  } catch (error) {
    console.error("Failed to fetch vehicle makes:", error);
    throw new Error("Something went wrong");
  }
}

async function handleFetchResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    console.error(`Fetch error: ${res.statusText}`);
    throw new Error();
  }
  const data = await res.json();
  if (!data.Results) {
    console.warn("No Results property in the API response");
    return [] as unknown as T;
  }
  return data.Results;
}

export { getVehicleModels, getVehicleMakes };
