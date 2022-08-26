import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovies} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MovieListCard";
import {PaginationMovies} from "../Layout/PaginationMovies/PaginationMovies";


const MoviesList :FC = () => {
    const {allMovies, moviesPage} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getAllMovies(moviesPage))
    },[moviesPage])

    return (

        <div>
            {allMovies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            <div>
                <PaginationMovies/>
            </div>
        </div>
    );
};

export {MoviesList};
