"use client"

import { useState } from "react"
import Link from "next/link"
import { VehicleMake } from "@/app/types"
import { Select } from "@/components/Select"
import { generateModelYearsList } from "@/utils/generateModelYearsList"

type FilterSelectGroupProps = {
  vehicleMakes: VehicleMake[]
}

export const FilterSelectGroup: React.FC<FilterSelectGroupProps> = ({ vehicleMakes }) => {
  const [selectedMake, setSelectedMake] = useState<string>("")
  const [selectedYear, setSelectedYear] = useState<string>("")
  const yearOptions = generateModelYearsList().map((year) => ({
    id: year,
    name: year.toString(),
  }))

  return vehicleMakes?.length ? (
    <div className="max-w-lg mx-auto">
      <div className="mb-8 grid gap-4">
        <Select
          label="Vehicle Make"
          options={vehicleMakes.map((make) => ({ id: make.MakeId, name: make.MakeName }))}
          selectedValue={selectedMake}
          onValueChange={setSelectedMake}
        />

        <Select label="Model Year" options={yearOptions} selectedValue={selectedYear} onValueChange={setSelectedYear} />
      </div>
      <Link
        href={`/result/${selectedMake}/${selectedYear}`}
        className={`rounded bg-indigo-600 px-4 py-2 text-white transition duration-200 ${selectedMake && selectedYear ? "hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-none" : "pointer-events-none cursor-not-allowed opacity-70"}`}
        prefetch={false}
      >
        Next
      </Link>
    </div>
  ) : (
    <div>Loading options...</div>
  )
}
