import { WorkoutType } from "./workout_type.model";

export interface Flight {
  id?: number;
  flightNumber: string;
  type?: WorkoutType;
  duration: number;
  description: string;
  imageUrl: string;
  isFavorite: boolean;
  isCompleted: boolean;
}
