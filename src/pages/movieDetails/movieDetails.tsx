import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/api";
import { ITitleMovieData } from "../../services/apiTypes";
import { StarIcon, PlusIcon } from "../../components/icons/icons";
import Image from "../../components/image/image";
import { Button } from "react-bootstrap";
import Spinner from "../../components/spinner/spinner";
import "./movieDetails.css";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState<ITitleMovieData>();
  let { id } = useParams();
//   const storedData = localStorage.getItem("visitedIds");
//   const ids = storedData ? JSON.parse(storedData) : [];
//   if (!ids.includes(id)) ids.push(id);
//   localStorage.setItem("visitedIds", JSON.stringify(ids));

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const res = await getMovieById(id);
          setMovieData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="m-3">
        {movieData ? <>
      <section className="details-content-section">
        <h1>{movieData?.fullTitle}</h1>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ marginBottom: "5rem" }}
        >
          <div className="ms-3">{`${movieData?.year} - ${movieData?.contentRating} - ${movieData?.runtimeStr}`}</div>
          {movieData?.imDbRating && <div className="d-flex align-items-center">
            <StarIcon color="yellow" width={32} height={32} />
            <span className="ms-2" style={{ fontSize: 24 }}>
              {movieData?.imDbRating}
            </span>
          </div>}
          <Button variant="secondary">
            <PlusIcon />
            Watchlist
          </Button>
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center flex-wrap details-content-section">
        <div className="me-5">
          {movieData?.trailer?.thumbnailUrl && (
            <Image src={movieData.image} width="auto" height={360} />
          )}
        </div>
        <iframe
          src={`${movieData?.trailer?.linkEmbed}?autoplay=false&amp;width=640`}
          scrolling="no"
          width="640"
          height="360"
          allowFullScreen
        ></iframe>
      </section>
      <section className="details-content-section mt-5">
        <div className="d-flex m-2">
          {movieData?.genres?.split(",")?.map((genre: string, index: number) => {
            return <div key={genre + "-" + index} className="details-coin-text me-2">{genre}</div>;
          })}
        </div>
        <div className="d-flex justify-content-center m-3">
          {movieData?.plot}
        </div>
        <hr />
        <div className="ms-3">{`Directors: ${movieData?.directors}`}</div>
        <hr />
        <div className="ms-3">{`Writers: ${movieData?.writers}`}</div>
        <hr />
        <div className="ms-3">{`Stars: ${movieData?.stars}`}</div>
        <hr />
      </section>
      <section className="details-content-section">Actors</section>
      <section className="details-content-section scrollable">
        <div className="d-flex">
          {movieData?.fullCast?.actors?.map((actor: {image: string; name: string}, index: number) => {
            return (
              <div key={actor.name + "-" + index} className="actor-data-container">
                <Image src={actor.image} width={160} height="auto" />
                <p>{actor.name}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="details-content-section">Similar Movies</section>
      <section className="details-content-section scrollable">
        <div className="d-flex">
          {movieData?.similars.map((movie: {image: string; title: string}, index: number) => {
            return (
              <div key={movie.title + "-" + index} className="similar-movie-container">
                <Image src={movie.image} width={160} height="auto" />
                <p>{movie.title}</p>
              </div>
            );
          })}
        </div>
      </section>
      </> : <Spinner fixed />}
    </div>
  );
};

export default MovieDetails;
