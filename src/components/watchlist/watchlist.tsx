import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/store";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../icons/icons";
import "./watchlist.css";

const Watchlist = () => {
    const[showWatchlist, setShowWatchlist] = useState(true);
  //@ts-ignore
  const { globalState, dispatch } = useContext(StoreContext);

  console.log(globalState.watchlist);
  const handleToggleWatchlist = () => {
    setShowWatchlist(!showWatchlist)
  };

  return (
    <div className="watchlist-container">
      <div className="watchlist-header">
        <span>Watchlist</span>
        <button onClick={handleToggleWatchlist}>
          <ArrowIcon color="black" style={{transform: showWatchlist ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
        </button>
      </div>
      <div className="watchlist-list-container" style={{maxHeight: showWatchlist ? 0 : 500}}>
        {globalState.watchlist.length === 0 ? <div>
            <p>Your watchlist is empty.</p>
            <p>You should add some movies.</p>
            </div> 
            : 
        <ol style={{ margin: 0 }}>
          {globalState.watchlist.map((wl: any) => {
            return (
              <li>
                <Link to={`/details/${wl.id}`} className="movie-card-title m-2">
                  {wl.title}
                </Link>
              </li>
            );
          })}
        </ol>}
      </div>
    </div>
  );
};

export default Watchlist;
