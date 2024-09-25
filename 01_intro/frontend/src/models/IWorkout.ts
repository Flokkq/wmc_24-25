enum WorkoutCategory {
  Running = "running",
  Cycling = "cycling",
  Swimming = "swimming",
}

export interface IWorkout {
  name: string;
  category: string;
  heartFrequencies: number[];
}
