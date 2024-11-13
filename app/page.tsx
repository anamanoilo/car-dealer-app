"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

type VehicleMake = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}

async function fetchVehicleMakes(): Promise<VehicleMake[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`)
  const data = await res.json()
  return data.Results
}


export default function FilterPage() {
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([])
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [isNextEnabled, setIsNextEnabled] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    async function getMakes(){
      const makes = await fetchVehicleMakes()
      setVehicleMakes(makes)
    }
    getMakes()
  }, [])

  useEffect(() => {
    setIsNextEnabled(!!selectedMake && !!selectedYear)
  }, [selectedMake, selectedYear])

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Filter Vehicles</h1>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Vehicle Make:</label>
        <select
          className="w-full rounded border p-2"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">Select a make</option>
          {vehicleMakes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Model Year:</label>
        <select
          className="w-full rounded border p-2"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select a year</option>
          {Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Link
        href={`/result/${selectedMake}/${selectedYear}`}
        className={`rounded bg-blue-500 p-2 text-white ${isNextEnabled ? "" : "cursor-not-allowed opacity-50"}`}
      >
        Next
      </Link>
    </div>
  )
}
