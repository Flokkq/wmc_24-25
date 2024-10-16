import { WorkoutType } from "./workout_type.model";

export interface Flight {
  flightNumber: string;
  type?: WorkoutType;
  duration: number;
  isCompleted: boolean;
}
