import { Pilot } from "./models/pilot.model";
import { Flight } from "./models/workout.model";
import { WorkoutType } from "./models/workout_type.model";

export const typesMockData: WorkoutType[] = [
  { id: 1, name: "Commercial" },
  { id: 2, name: "Private" },
  { id: 3, name: "Training" },
];

export const flightsMockData: Flight[] = [
  {
    flightNumber: "LH123",
    type: { id: 1, name: "Commercial" },
    duration: 90,
    isCompleted: false,
  },
  {
    flightNumber: "LH321",
    type: { id: 2, name: "Private" },
    duration: 90,
    isCompleted: false,
  },
  {
    flightNumber: "LH567",
    type: { id: 3, name: "Training" },
    duration: 90,
    isCompleted: false,
  },
  {
    flightNumber: "LH789",
    type: { id: 1, name: "Commercial" },
    duration: 120,
    isCompleted: true,
  },
  {
    flightNumber: "LH987",
    type: { id: 2, name: "Private" },
    duration: 60,
    isCompleted: true,
  },
  {
    flightNumber: "LH654",
    type: { id: 3, name: "Training" },
    duration: 75,
    isCompleted: false,
  },
];

export const pilotsMockData: Pilot[] = [
  {
    id: 1,
    name: "John Doe",
    isFavorite: true,
    workouts: [flightsMockData[0], flightsMockData[2]],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CkDvnsYaSMo4ZaHGL13A2257hmbcrYhg-Q&s",
  },
  {
    id: 2,
    name: "Jane Smith",
    isFavorite: false,
    workouts: [flightsMockData[1], flightsMockData[3]],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CkDvnsYaSMo4ZaHGL13A2257hmbcrYhg-Q&s",
  },
  {
    id: 3,
    name: "Alex Johnson",
    isFavorite: true,
    workouts: [flightsMockData[0], flightsMockData[1], flightsMockData[2]],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CkDvnsYaSMo4ZaHGL13A2257hmbcrYhg-Q&s",
  },
  {
    id: 4,
    name: "Emily Davis",
    isFavorite: false,
    workouts: [flightsMockData[3], flightsMockData[4]],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CkDvnsYaSMo4ZaHGL13A2257hmbcrYhg-Q&s",
  },
  {
    id: 5,
    name: "Michael Brown",
    isFavorite: true,
    workouts: [flightsMockData[1], flightsMockData[4], flightsMockData[5]],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CkDvnsYaSMo4ZaHGL13A2257hmbcrYhg-Q&s",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    isFavorite: true,
    workouts: [flightsMockData[2], flightsMockData[5], flightsMockData[3]],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CkDvnsYaSMo4ZaHGL13A2257hmbcrYhg-Q&s",
  },
];
