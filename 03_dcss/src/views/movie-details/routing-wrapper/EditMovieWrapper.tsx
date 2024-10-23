import React, {useEffect, useState} from "react";
import MovieDetails from "../MovieDetails";
import {useNavigate, useParams} from "react-router-dom";
import {Movie} from "../../../common/models/movie.model";
import {getById, put} from "../../../common/helpers/firebase-rest-helper/firebase-rest-helper";

const initialMovie: Movie = {
    title: "",
    description: "",
    imageUrl: "",
    isFavorite: false,
    isWatched: false,
    genre: {
        id: "",
        name: ""
    },
}

const EditMovieWrapper: React.FC = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [formData, setFormData] = useState<Movie>(initialMovie)

    useEffect(() => {
        void (async () => {
            if (id != null) {
                const _movie = await getById<Movie>("movies", id)

                if (_movie != null) {
                    setFormData(_movie)
                }
            }
        })()
    }, [id])

    const handleSave = () => {
        void (async () => {
            await put<Movie>("movies", formData)
            backToOverview()
        })()
    }

    const backToOverview = () => {
        navigate(-1)
    }

    return (
        <MovieDetails
            movie={formData}
            onChange={movie => setFormData(movie)}
            onSave={handleSave}
            onCancel={backToOverview}
        />
    )
}

export default EditMovieWrapper