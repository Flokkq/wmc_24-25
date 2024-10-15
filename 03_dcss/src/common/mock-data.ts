import {Movie} from "./models/movie.model";
import {Genre} from "./models/genre.model";

export const moviesMockData: Movie[] = [
    {
        id: 1,
        title: "Avengers: End game",
        description: "",
        genre: { id: 6, name: "Sci-Fi" },
        year: 2019,
        imageUrl: "https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA.jpg?format=jpg&width=960",
        isFavorite: true,
        isWatched: false
    },
    {
        id: 2,
        title: "Fight club",
        description: "",
        genre: { id: 2, name: "Drama" },
        year: 1999,
        imageUrl: "https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg",
        isFavorite: false,
        isWatched: true
    },
    {
        id: 3,
        title: "The Dark Knight",
        description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
        genre: { id: 1, name: "Action" },
        year: 2008,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        isFavorite: true,
        isWatched: true
    },
    {
        id: 4,
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        genre: { id: 1, name: "Action" },
        year: 2010,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        isFavorite: true,
        isWatched: true
    },
    {
        id: 5,
        title: "Star Wars: Episode V - The Empire Strikes Back",
        description: "After the Empire overpowers the Rebel Alliance, Luke Skywalker begins his Jedi training with Yoda. At the same time, Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.",
        genre: { id: 6, name: "Sci-Fi" },
        year: 1980,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg",
        isFavorite: false,
        isWatched: false
    },
    {
        id: 6,
        title: "Venom: The Last Dance",
        description: "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        genre: { id: 6, name: "Sci-Fi" },
        year: 2024,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/Venom_The_Last_Dance_Poster.jpg",
        isFavorite: false,
        isWatched: false
    },
    {
        id: 7,
        title: "Dune: Part Two",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        genre: { id: 6, name: "Sci-Fi" },
        year: 2024,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
        isFavorite: true,
        isWatched: true
    },
]

export const genresMockData: Genre[] = [
    { id: 1, name: "Action" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Thriller" },
    { id: 4, name: "Crime" },
    { id: 5, name: "Comedy" },
    { id: 6, name: "Sci-Fi" },
    { id: 7, name: "Animation" }
]