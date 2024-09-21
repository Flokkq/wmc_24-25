import React from "react";
import { IWorkout } from "../../models/IWorkout";

interface WorkoutDetailProps {
  workout: IWorkout;
  onAddHeartFrequency: () => void;
}

const WorkoutDetail: React.FC<WorkoutDetailProps> = ({
  workout,
  onAddHeartFrequency,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Workout Details</h2>
      <p>
        <strong>Name:</strong> {workout.name}
      </p>
      <p>
        <strong>Category:</strong> {workout.category}
      </p>
      <p>
        <strong>Heart Frequencies:</strong>{" "}
        {workout.heartFrequencies.join(", ")}
      </p>
      <button
        onClick={onAddHeartFrequency}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Random Heart Frequency
      </button>
    </div>
  );
};

export default WorkoutDetail;
