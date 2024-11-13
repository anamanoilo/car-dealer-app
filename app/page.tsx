"use client"
import { useState, useEffect } from "react"
import { fetchVehicleMakes } from "./api/vehicleService"
import Link from "next/link"
// import useSWR,{Fetcher} from 'swr'
import { VehicleMake } from "./types"

// const fetcher: Fetcher = (...args) => fetch(...args).then(res => res.json())

export default function FilterPage() {
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([])
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  // const { data, error, isLoading } = useSWR('/api/user/123', fetcher)
  const [isNextEnabled, setIsNextEnabled] = useState(false)
  const currentYear = new Date().getFullYear()
  const startYear = 2015

  useEffect(() => {
    async function getMakes() {
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
          {Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i).map((year) => (
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
