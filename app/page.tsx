"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getVehicleMakes } from "./api/vehicleService";
import { VehicleMake } from "./types";
import { Select } from "@/components/Select";
import { generateModelYearsList } from "@/utils/generateModelYearsList";

export default function FilterPage() {
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[] | null>(null);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const yearOptions = generateModelYearsList().map((year) => ({
    id: year,
    name: year.toString(),
  }));

  useEffect(() => {
    async function getMakes() {
      const makes = await getVehicleMakes();
      setVehicleMakes(makes);
    }
    getMakes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">Filter Vehicles</h2>
      {vehicleMakes?.length ? (
        <>
          <div className="mb-8 grid gap-4">
            <Select
              label="Vehicle Make"
              options={vehicleMakes.map((make) => ({ id: make.MakeId, name: make.MakeName }))}
              selectedValue={selectedMake}
              onValueChange={setSelectedMake}
            />

            <Select
              label="Model Year"
              options={yearOptions}
              selectedValue={selectedYear}
              onValueChange={setSelectedYear}
            />
          </div>
          <Link
            href={`/result/${selectedMake}/${selectedYear}`}
            className={`rounded bg-indigo-600 px-4 py-2 text-white transition duration-200 ${selectedMake && selectedYear ? "hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-none" : "pointer-events-none cursor-not-allowed opacity-70"}`}
          >
            Next
          </Link>
        </>
      ) : (
        <div>Loading options...</div>
      )}
    </div>
  );
}
