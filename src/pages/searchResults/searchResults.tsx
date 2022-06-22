import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMoviesByExpression } from "../../services/api";
import { ISearchMovieResult, ISearchMovieData } from "../../services/apiTypes";
import MovieCard from "../../components/movieCard/movieCard";
import Spinner from "../../components/spinner/spinner";
import "./searchResults.css";

const SearchResults = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<ISearchMovieData | null>(null);
  let { searchQuery } = useParams();

  const searchMovie = async (searchExpression: string) => {
    try {
      const res = await searchMoviesByExpression(searchExpression);
      if (res.status === 200) {
        setSearchResults(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      if (searchQuery && searchQuery !== "") {
        setLoading(true);
        await searchMovie(searchQuery);
        setLoading(false);
      }
    };
    fetchSearchData();
  }, [searchQuery]);

  return (<div className="m-3">
     {!loading ? (
              <div className="d-flex flex-column search-list-container">
                {searchResults && searchResults?.results?.map((movieObj: ISearchMovieResult) => (
                  <MovieCard key={movieObj.id} data={movieObj} />
                ))}
              </div>
            ): <Spinner fixed/>}
  </div>);
};

export default SearchResults;
