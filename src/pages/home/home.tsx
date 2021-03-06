import { useEffect, useState, useContext } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import {
  getComingSoonMovies,
  getTopMovies,
  getMostPopularMovies
} from '../../services/api';
import MovieCard from '../../components/movieCard/movieCard';
import { INewMovieDataDetails } from '../../services/apiTypes';
import Spinner from '../../components/spinner/spinner';
import PaginatedList from '../../components/paginatedList/paginatedList';
import { StoreContext } from '../../context/store';
import './home.css';

const Home = () => {
  const [comingSoon, setComingSoon] = useState<INewMovieDataDetails[]>([]);
  const [topList, setTopList] = useState<INewMovieDataDetails[]>([]);
  const [popularList, setPopularList] = useState<INewMovieDataDetails[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  //@ts-ignore
  const { globalState, dispatch } = useContext(StoreContext);

  const fetchComingSoonList = async () => {
    try {
      const res = await getComingSoonMovies();
      if (
        res.status === 200 &&
        res?.data?.errorMessage === '' &&
        res?.data?.items
      ) {
        setComingSoon(res.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTopList = async () => {
    try {
      const res = await getTopMovies();
      if (
        res.status === 200 &&
        res?.data?.errorMessage === '' &&
        res?.data?.items
      ) {
        setTopList(res.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPopularList = async () => {
    try {
      const res = await getMostPopularMovies();
      if (
        res.status === 200 &&
        res?.data?.errorMessage === '' &&
        res?.data?.items
      ) {
        setPopularList(res.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await Promise.all([
        fetchComingSoonList(),
        fetchTopList(),
        fetchPopularList()
      ]);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="home-container">
      <section>
        <Tabs defaultActiveKey="comingSoon" className="mb-2 mt-0">
          <Tab eventKey="comingSoon" title="Coming Soon">
            {!loading && (
              <PaginatedList
                listContainerClassName="d-flex flex-wrap home-tab-content"
                lisPaginationClassName="d-flex justify-content-center p-3"
                pageSize={10}
              >
                {comingSoon.map((movieObj: INewMovieDataDetails) => (
                  <MovieCard key={movieObj.id} data={movieObj} />
                ))}
              </PaginatedList>
            )}
          </Tab>
          <Tab eventKey="top250" title="Top 250">
            {!loading && (
              <PaginatedList
                listContainerClassName="d-flex flex-wrap home-tab-content"
                lisPaginationClassName="d-flex justify-content-center p-3"
                pageSize={10}
              >
                {topList.map((movieObj: INewMovieDataDetails) => (
                  <MovieCard
                    key={movieObj.id}
                    data={movieObj}
                    width="30rem"
                    imDbRating={movieObj.imDbRating}
                  />
                ))}
              </PaginatedList>
            )}
          </Tab>
          <Tab eventKey="mostPopular" title="Most Popular">
            {!loading && (
              <PaginatedList
                listContainerClassName="d-flex flex-wrap home-tab-content"
                lisPaginationClassName="d-flex justify-content-center p-3"
                pageSize={10}
              >
                {popularList.map((movieObj: INewMovieDataDetails) => (
                  <MovieCard
                    key={movieObj.id}
                    data={movieObj}
                    width="30rem"
                    imDbRating={movieObj.imDbRating}
                  />
                ))}
              </PaginatedList>
            )}
          </Tab>
        </Tabs>
        {loading && <Spinner fixed />}
      </section>
    </div>
  );
};

export default Home;
