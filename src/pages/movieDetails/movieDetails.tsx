import { useEffect, useState, useContext } from 'react';
import { StoreContext } from '../../context/store';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import { ITitleMovieData } from '../../services/apiTypes';
import { StarIcon } from '../../components/icons/icons';
import Image from '../../components/image/image';
import WatchlistButton from '../../components/watchlistButton/watchlistButton';
import Spinner from '../../components/spinner/spinner';
import './movieDetails.css';

const MovieDetails = () => {
  let params = useParams();
  const [movieData, setMovieData] = useState<ITitleMovieData>();
  const [id, setId] = useState<string | undefined>(params.id);
  const [loading, setLoading] = useState<boolean>(false);

  //@ts-ignore
  const { globalState, dispatch } = useContext(StoreContext);

  const addToVisitedList = (data: ITitleMovieData) => {
    dispatch({
      type: 'ADD_TO_VISITED_LIST',
      payload: {
        visitedList: {
          id,
          title: data.fullTitle,
          genreList: data.genreList,
          contentRating: data.contentRating,
          image: data.image
        }
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id && id !== '') {
          setLoading(true);
          const res = await getMovieById(id);
          setMovieData(res.data);
          addToVisitedList(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToWatchList = () => {
    dispatch({
      type: 'ADD_TO_WATCHLIST',
      payload: {
        watchlist: {
          id,
          title: movieData?.fullTitle,
          genreList: movieData?.genreList,
          contentRating: movieData?.contentRating,
          image: movieData?.trailer?.thumbnailUrl
        }
      }
    });
  };

  return (
    <div style={{ marginBottom: '5rem' }}>
      {!loading ? (
        <>
          <section className="details-content-section">
            <h1>{movieData?.fullTitle}</h1>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginBottom: '5rem' }}
            >
              <div className="ms-3">{`${movieData?.year} ${
                movieData?.contentRating ? movieData?.contentRating : ''
              } ${movieData?.runtimeStr ? movieData?.runtimeStr : ''}`}</div>
              {movieData?.imDbRating && (
                <div className="d-flex align-items-center">
                  <StarIcon color="yellow" width={32} height={32} />
                  <span className="ms-2" style={{ fontSize: 24 }}>
                    {movieData?.imDbRating}
                  </span>
                </div>
              )}
              <WatchlistButton onClick={handleAddToWatchList} />
            </div>
          </section>
          <section className="d-flex justify-content-center align-items-center flex-wrap details-content-section">
            <div className="me-5">
              {movieData?.trailer?.thumbnailUrl && (
                <Image
                  src={movieData.image}
                  width="auto"
                  height={360}
                  phantomHeight={360}
                  phantomWidth={240}
                />
              )}
            </div>
            {movieData?.trailer?.linkEmbed && (
              <iframe
                src={`${movieData?.trailer?.linkEmbed}?autoplay=false&amp;width=640`}
                scrolling="no"
                width="640"
                height="360"
                allowFullScreen
                title={movieData?.trailer?.linkEmbed}
              ></iframe>
            )}
          </section>
          <section className="details-content-section mt-5">
            <div className="d-flex m-2">
              {movieData?.genres
                ?.split(',')
                ?.map((genre: string, index: number) => {
                  return (
                    <div
                      key={genre + '-' + index}
                      className="details-coin-text me-2"
                    >
                      {genre}
                    </div>
                  );
                })}
            </div>
            <div className="d-flex m-3">{movieData?.plot}</div>
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
              {movieData?.fullCast?.actors?.map(
                (actor: { image: string; name: string }, index: number) => {
                  return (
                    <div
                      key={actor.name + '-' + index}
                      className="actor-data-container"
                    >
                      <Image src={actor.image} width={160} height="auto" />
                      <p>{actor.name}</p>
                    </div>
                  );
                }
              )}
            </div>
          </section>
          <section className="details-content-section">Similar Movies</section>
          <section className="details-content-section scrollable">
            <div className="d-flex">
              {movieData?.similars?.map(
                (
                  movie: { id: string; image: string; title: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={movie.title + '-' + index}
                      className="d-flex flex-column align-items-center similar-movie-container"
                    >
                      <Image src={movie.image} width={160} height="auto" />
                      <button
                        onClick={() => {
                          setId(movie.id);
                          window.scrollTo(0, 0);
                        }}
                        className="details-custom-link-button"
                      >
                        {movie.title}
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </section>

          <section className="details-content-section">Watched Movies</section>
          <section className="details-content-section scrollable">
            <div className="d-flex">
              {globalState?.visitedList.map(
                (
                  movie: { id: string; image: string; title: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={movie.title + '-' + index}
                      className="d-flex flex-column align-items-center similar-movie-container"
                    >
                      <Image src={movie.image} width={160} height="auto" />
                      <button
                        onClick={() => {
                          setId(movie.id);
                          window.scrollTo(0, 0);
                        }}
                        className="details-custom-link-button"
                      >
                        {movie.title}
                      </button>
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </>
      ) : (
        <Spinner fixed />
      )}
    </div>
  );
};

export default MovieDetails;
