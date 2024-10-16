import { Flight } from "./workout.model";

export interface Pilot {
  id?: number;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
  workouts: Flight[];
}
