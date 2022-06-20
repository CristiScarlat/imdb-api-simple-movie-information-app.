import React from "react";
import { Link } from "react-router-dom"
import { INewMovieDataDetails, ISearchMovieResult } from "../../services/apiTypes";
import { StarIcon } from '../icons/icons';
import Image from '../image/image';
import "./movieCard.css";

interface ICardProps {
  data: INewMovieDataDetails | ISearchMovieResult;
  width?: string;
  imDbRating?: string;
}

const MovieCard: React.FC<ICardProps> = ({
  data: {
    id,
    fullTitle,
    image,
    contentRating,
    runtimeMins,
    genreList,
    metacriticRating,
    plot,
    directors,
    stars,
  },
  width="100%",
  imDbRating,
}) => {
  return (
    <div className="movie-card-container" style={{width}} id={id}>
      {image && <Image src={image} alt="..." width={180} height="auto" phantomWidth={180} phantomHeight={256}/>}
      <div className="ms-2">
        <Link to={`/details/${id}`} className="movie-card-title m-2" >{fullTitle}</Link>
        {imDbRating && <div className="d-flex align-items-center">
          <StarIcon color="yellow" width={18} height={18}/><span className="ms-2">{imDbRating}</span></div>}
        <div className="movie-card-content-subtitle m-2">
          {contentRating && <div className="movie-card-content-rating">{contentRating}</div>}
          {runtimeMins && <div>{runtimeMins} min -</div>}
          <div>
            {genreList ? genreList.map((genre) => genre.value).join(" | ") : ""}
          </div>
        </div>
        {metacriticRating && <div className="d-flex align-items-center m-2 mt-3">
          <div className="movie-card-metascore-icon">{metacriticRating}</div>
          <span className="ms-1">Metascore</span>
        </div>}
        {plot && <div className="movie-card-plot m-2">{plot}</div>}
        <div className="pt-2 pb-2">
          {directors && <p className="m-2">
            Directors:<span className="ms-1">{directors}</span>
          </p>}
          {stars && <p className="m-2">
            Stars:<span className="ms-1">{stars}</span>
          </p>}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
