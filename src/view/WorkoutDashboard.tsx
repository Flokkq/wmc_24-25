import React, { useState, useEffect } from "react";
import IWorkout, { WorkoutCategory } from "../models/IWorkout";

const initialWorkouts: IWorkout[] = [
  {
    category: WorkoutCategory.Running,
    name: "Yates",
    heartFrequencies: [130, 150, 160, 175],
  },
  {
    category: WorkoutCategory.Cycling,
    name: "Yates",
    heartFrequencies: [145, 155, 165, 180],
  },
  {
    category: WorkoutCategory.Cycling,
    name: "Yates",
    heartFrequencies: [135, 145, 155, 170],
  },
  {
    category: WorkoutCategory.Swimming,
    name: "Phelps",
    heartFrequencies: [140, 160, 170, 185],
  },
  {
    category: WorkoutCategory.Swimming,
    name: "Phelps",
    heartFrequencies: [125, 140, 150, 165],
  },
  {
    category: WorkoutCategory.Running,
    name: "Bolt",
    heartFrequencies: [130, 150, 160, 175],
  },
  {
    category: WorkoutCategory.Running,
    name: "Bolt",
    heartFrequencies: [140, 160, 170, 185],
  },
  {
    category: WorkoutCategory.Running,
    name: "Melli",
    heartFrequencies: [135, 145, 155, 170],
  },
  {
    category: WorkoutCategory.Cycling,
    name: "Renshaw",
    heartFrequencies: [130, 150, 160, 175],
  },
  {
    category: WorkoutCategory.Cycling,
    name: "Renshaw",
    heartFrequencies: [145, 155, 165, 180],
  },
];

const WorkoutDashboard: React.FC = () => {
  const [workouts, setWorkouts] = useState<IWorkout[]>(initialWorkouts);
  const [selectedWorkout, setSelectedWorkout] = useState<IWorkout | null>(null);

  const handleSelectWorkout = (workout: IWorkout) => {
    setSelectedWorkout(workout);
  };

  const handleClearSelection = () => {
    setSelectedWorkout(null);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Workout Dashboard</h1>

      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Category</th>
            <th className="border border-gray-400 px-4 py-2">
              Heart Frequencies
            </th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 px-4 py-2">
                {workout.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {workout.category}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {workout.heartFrequencies.join(", ")}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  onClick={() => handleSelectWorkout(workout)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                >
                  Select & Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedWorkout && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Workout Details</h2>
          <p>
            <strong>Name:</strong> {selectedWorkout.name}
          </p>
          <p>
            <strong>Category:</strong> {selectedWorkout.category}
          </p>
          <p>
            <strong>Heart Frequencies:</strong>{" "}
            {selectedWorkout.heartFrequencies.join(", ")}
          </p>
          <button
            onClick={handleClearSelection}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear Selection.
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutDashboard;
