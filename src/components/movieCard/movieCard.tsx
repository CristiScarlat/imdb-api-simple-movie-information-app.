import React, { useContext } from "react";
import { StoreContext } from "../../context/store";
import { Link } from "react-router-dom";
import { ISearchMovieResult } from "../../services/apiTypes";
import { StarIcon } from "../icons/icons";
import Image from "../image/image";
import WatchlistButton from "../watchlistButton/watchlistButton";
import "./movieCard.css";

interface ICardProps {
  data: ISearchMovieResult;
  width?: string;
  imDbRating?: string;
}

const MovieCard: React.FC<ICardProps> = ({
  data: {
    id,
    fullTitle,
    title,
    image,
    contentRating,
    runtimeMins,
    genreList,
    metacriticRating,
    plot,
    description,
    directors,
    stars,
  },
  width = "100%",
  imDbRating,
}) => {
  //@ts-ignore
  const { globalState, dispatch } = useContext(StoreContext);

  const handleAddToWatchList = () => {
    dispatch({
      type: "ADD_TO_WATCHLIST",
      payload: {
        watchlist: {
          id,
          title: fullTitle || title,
          genreList,
          contentRating
        },
      },
    });
  };

  return (
    <div className="movie-card-container" style={{ width }} id={id}>
      {image && (
        <Image
          src={image}
          alt="..."
          width={180}
          height="auto"
          phantomWidth={180}
          phantomHeight={256}
        />
      )}
      <div className="ms-2">
        <Link to={`/details/${id}`} className="movie-card-title m-2">
          {fullTitle || title}
        </Link>
        {imDbRating && (
          <div className="d-flex align-items-center">
            <StarIcon color="yellow" width={18} height={18} />
            <span className="ms-2">{imDbRating}</span>
          </div>
        )}
        <div className="movie-card-content-subtitle m-2">
          {contentRating && (
            <div className="movie-card-content-rating">{contentRating}</div>
          )}
          {runtimeMins && <div>{runtimeMins} min -</div>}
          <div>
            {genreList ? genreList.map((genre) => genre.value).join(" | ") : ""}
          </div>
        </div>
        {metacriticRating && (
          <div className="d-flex align-items-center m-2 mt-3">
            <div className="movie-card-metascore-icon">{metacriticRating}</div>
            <span className="ms-1">Metascore</span>
          </div>
        )}
        {(plot || description) && (
          <div className="movie-card-plot m-2">{plot || description}</div>
        )}
        <div className="pt-2 pb-2">
          {directors && (
            <p className="m-2">
              Directors:<span className="ms-1">{directors}</span>
            </p>
          )}
          {stars && (
            <p className="m-2">
              Stars:<span className="ms-1">{stars}</span>
            </p>
          )}
        </div>
      </div>
      <WatchlistButton className="ms-2" onClick={handleAddToWatchList} />
    </div>
  );
};

export default MovieCard;
