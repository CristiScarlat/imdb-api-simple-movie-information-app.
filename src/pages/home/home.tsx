import { useEffect, useState, useContext } from "react";
import { Tabs, Tab, Button} from "react-bootstrap";
import {
  getComingSoonMovies,
  getTopMovies,
  getMostPopularMovies,
  searchMoviesByExpression,
} from "../../services/api";
import MovieCard from "../../components/movieCard/movieCard";
import {
  INewMovieDataDetails,
  ISearchMovieData,
  ISearchMovieResult,
} from "../../services/apiTypes";
import Spinner from "../../components/spinner/spinner";
import { StoreContext } from "../../context/store";
import "./home.css";

const Home = () => {
  const [comingSoon, setComingSoon] = useState<INewMovieDataDetails[]>([]);
  const [topList, setTopList] = useState<INewMovieDataDetails[]>([]);
  const [popularList, setPopularList] = useState<INewMovieDataDetails[]>([]);
  const [searchResults, setSearchResults] = useState<ISearchMovieData | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("comingSoon");

  //@ts-ignore
  const { globalState, dispatch } = useContext(StoreContext);

  const fetchComingSoonList = async () => {
    try {
      const res = await getComingSoonMovies();
      if (
        res.status === 200 &&
        res?.data?.errorMessage === "" &&
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
        res?.data?.errorMessage === "" &&
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
        res?.data?.errorMessage === "" &&
        res?.data?.items
      ) {
        setPopularList(res.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (searchExpression: string) => {
    try {
      const res = await searchMoviesByExpression(searchExpression);
      console.log(res);
      if (res.status === 200) {
        setSearchResults(res.data);
        setActiveTab("search")
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
        fetchPopularList(),
      ]);
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    const fetchSearchData = async () => {
      if (globalState.search && globalState.search !== "") {
        setLoading(true);
        await searchMovie(globalState.search);
        dispatch({ type: "SET_SEARCH_RESULTS", load: { search: null } });
        setLoading(false);
      }
    }
    fetchSearchData();
  }, [globalState.search]);

  const handleActiveTab = (activeKey: any) => {
    setActiveTab(activeKey);
  }

  const handleCloseSearchTab = () => {
    setSearchResults(null);
    setActiveTab("comingSoon");
  }

  console.log(loading)

  return (
    <div className="home-container">
      <section>
        <Tabs defaultActiveKey="comingSoon" className="mb-3" activeKey={activeTab} onSelect={handleActiveTab}>
          {searchResults && (
            <Tab eventKey="search" title="Search Results">
              <div className="d-flex justify-content-between p-3">
                <h4>{`Search results for ${searchResults.expression}...`}</h4>
                <Button onClick={handleCloseSearchTab} variant="secondary">
                  Close Search Tab
                  </Button>
                  </div>
              {searchResults?.results.length > 0 ? <div className="d-flex flex-column home-tab-content">
                {searchResults?.results.map((movieObj: ISearchMovieResult) => (
                  <MovieCard key={movieObj.id} data={movieObj} />
                ))}
              </div> : <div>{`There are no results for ${searchResults.expression}`}</div>}
            </Tab>
          )}
          <Tab eventKey="comingSoon" title="Coming Soon">
            {!loading && (
              <div className="d-flex flex-column home-tab-content">
                {comingSoon.map((movieObj: INewMovieDataDetails) => (
                  <MovieCard key={movieObj.id} data={movieObj} />
                ))}
              </div>
            )}
          </Tab>
          <Tab eventKey="top250" title="Top 250">
            {!loading && (
              <div className="d-flex flex-wrap home-tab-content">
                {topList.map((movieObj: INewMovieDataDetails) => (
                  <MovieCard
                    key={movieObj.id}
                    data={movieObj}
                    width="30rem"
                    imDbRating={movieObj.imDbRating}
                  />
                ))}
              </div>
            )}
          </Tab>
          <Tab eventKey="mostPopular" title="Most Popular">
            {!loading && (
              <div className="d-flex flex-wrap home-tab-content">
                {popularList.map((movieObj: INewMovieDataDetails) => (
                  <MovieCard
                    key={movieObj.id}
                    data={movieObj}
                    width="30rem"
                    imDbRating={movieObj.imDbRating}
                  />
                ))}
              </div>
            )}
          </Tab>
        </Tabs>
        {loading && <Spinner fixed />}
      </section>
    </div>
  );
};

export default Home;
