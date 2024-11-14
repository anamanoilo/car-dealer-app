
import { Suspense } from "react";
import { getVehicleMakes } from "@/app/api/vehicleService";
import { FilterSelectGroup } from "@/components/FilterSelectsGroup";

export default async function FilterPage() {
  const vehicleMakes = await getVehicleMakes();

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">Filter Vehicles</h2>
      <Suspense fallback={<div>Loading options...</div>}>
      <FilterSelectGroup vehicleMakes={vehicleMakes} />
      </Suspense>
    </div>
  );
}
