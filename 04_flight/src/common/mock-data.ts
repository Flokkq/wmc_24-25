import { Flight } from "./models/workout.model";
import { WorkoutType } from "./models/workout_type.model";

export const flightsMockData: Flight[] = [
  {
    id: 1,
    flightNumber: "LH123",
    description: "Morning flight from Munich to Berlin.",
    type: { id: 1, name: "Commercial" },
    duration: 90,
    imageUrl: "https://path-to-image.jpg",
    isFavorite: true,
    isCompleted: false,
  },
  {
    id: 2,
    flightNumber: "LH321",
    description: "Morning flight from Munich to Berlin.",
    type: { id: 2, name: "Private" },
    duration: 90,
    imageUrl: "https://path-to-image.jpg",
    isFavorite: true,
    isCompleted: false,
  },
  {
    id: 3,
    flightNumber: "LH321",
    description: "Morning flight from Munich to Berlin.",
    type: { id: 3, name: "Training" },
    duration: 90,
    imageUrl: "https://path-to-image.jpg",
    isFavorite: true,
    isCompleted: false,
  },
  {
    id: 4,
    flightNumber: "LH123",
    description: "Morning flight from Munich to Berlin.",
    type: { id: 1, name: "Commercial" },
    duration: 90,
    imageUrl: "https://path-to-image.jpg",
    isFavorite: true,
    isCompleted: false,
  },
  {
    id: 5,
    flightNumber: "LH321",
    description: "Morning flight from Munich to Berlin.",
    type: { id: 2, name: "Private" },
    duration: 90,
    imageUrl: "https://path-to-image.jpg",
    isFavorite: true,
    isCompleted: false,
  },
  {
    id: 6,
    flightNumber: "LH321",
    description: "Morning flight from Munich to Berlin.",
    type: { id: 3, name: "Training" },
    duration: 90,
    imageUrl: "https://path-to-image.jpg",
    isFavorite: true,
    isCompleted: false,
  },
];

export const typesMockData: WorkoutType[] = [
  { id: 1, name: "Commercial" },
  { id: 2, name: "Private" },
  { id: 3, name: "Training" },
];

