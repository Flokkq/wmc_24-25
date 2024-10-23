import React, {useState} from "react";
import MovieDetails from "../MovieDetails";
import {Movie} from "../../../common/models/movie.model";
import {useNavigate} from "react-router-dom";
import {post} from "../../../common/helpers/firebase-rest-helper/firebase-rest-helper";

const initialMovie: Movie = {
    title: "",
    description: "",
    imageUrl: "",
    isFavorite: false,
    isWatched: false
}

const NewMovieWrapper: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<Movie>(initialMovie)

    const handleSave = () => {
        void (async () => {
            await post<Movie>("movies", formData)
            backToOverview()
        })()
    }

    const backToOverview = () => {
        navigate(-1)
    }

    return (
        <MovieDetails
            movie={formData}
            onChange={(movie) => setFormData(movie)}
            onSave={handleSave}
            onCancel={backToOverview}
        />
    )
}

export default NewMovieWrapper