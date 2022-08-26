import {FC} from "react";
import { Link } from "react-router-dom";
import urls from "../../constants/urls";
import {IMovie} from "../../interfaces";

const MoviesListCard : FC <{movie:IMovie}> = ({movie}) => {
    const {title, id, vote_average, release_date, overview, poster_path} = movie

    return (
        <div>
            <Link to={`/movie/${movie.id.toString()}`}>
                <div className={'movieCard'}>
                    <div className={"description"}>
                        <p style={{fontSize: 19, fontFamily: "sans-serif"}}>{title}</p>
                        <p className={"overview"}>{overview}</p>
                        <p className={'date'}>{release_date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {MoviesListCard};
