export enum WorkoutCategory {
  Running = "running",
  Cycling = "cycling",
  Swimming = "swimming",
}

export interface IWorkout {
  name: string;
  category: WorkoutCategory;
  heartFrequencies: number[];
}
