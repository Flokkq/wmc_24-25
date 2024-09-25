import React, { useState } from "react";
import { IWorkout } from "../../models/IWorkout";
import WorkoutDetail from "./DashboardDetail";

const initialWorkouts: IWorkout[] = [
  {
    category: "running",
    name: "Yates",
    heartFrequencies: [130, 150, 160, 175],
  },
  {
    category: "cycling",
    name: "Yates",
    heartFrequencies: [145, 155, 165, 180],
  },
  {
    category: "cycling",
    name: "Yates",
    heartFrequencies: [135, 145, 155, 170],
  },
  {
    category: "swimming",
    name: "Phelps",
    heartFrequencies: [140, 160, 170, 185],
  },
  {
    category: "swimming",
    name: "Phelps",
    heartFrequencies: [125, 140, 150, 165],
  },
  { category: "running", name: "Bolt", heartFrequencies: [130, 150, 160, 175] },
  { category: "running", name: "Bolt", heartFrequencies: [140, 160, 170, 185] },
  {
    category: "running",
    name: "Melli",
    heartFrequencies: [135, 145, 155, 170],
  },
  {
    category: "cycling",
    name: "Renshaw",
    heartFrequencies: [130, 150, 160, 175],
  },
  {
    category: "cycling",
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

  const handleClearSelect = (workout: IWorkout) => {
    setSelectedWorkout(null);

    setWorkouts(workouts.filter((w) => w != workout));
  };

  const handleAddRandomHeartFrequency = () => {
    if (selectedWorkout) {
      const randomFrequency = Math.floor(Math.random() * (190 - 130 + 1)) + 130;
      const updatedWorkout = {
        ...selectedWorkout,
        heartFrequencies: [
          ...selectedWorkout.heartFrequencies,
          randomFrequency,
        ],
      };

      setWorkouts((prevWorkouts) =>
        prevWorkouts.map((workout) =>
          workout.name === updatedWorkout.name &&
          workout.category === updatedWorkout.category
            ? updatedWorkout
            : workout,
        ),
      );

      setSelectedWorkout(updatedWorkout);
    }
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
        <WorkoutDetail
          workout={selectedWorkout}
          onAddHeartFrequency={handleAddRandomHeartFrequency}
          handleClearSelect={handleClearSelect}
        />
      )}
    </div>
  );
};

export default WorkoutDashboard;
