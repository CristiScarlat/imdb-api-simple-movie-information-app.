import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/store";
import { Link } from "react-router-dom";
import { ArrowIcon, TrashIcon } from "../icons/icons";
import { Table } from "react-bootstrap";
import "./watchlist.css";

const Watchlist = () => {
  const [showWatchlist, setShowWatchlist] = useState(true);
  //@ts-ignore
  const { globalState, dispatch } = useContext(StoreContext);

  const handleToggleWatchlist = () => {
    setShowWatchlist(!showWatchlist);
  };

  const handleRemoveFromWatchlist = (movieToRemove: any) => {
    dispatch({
      type: "REMOVE_FROM_WATCHLIST",
      payload: {
        watchlist: movieToRemove,
      },
    });
  };

  return (
    <div className="watchlist-container">
      <div className="watchlist-header">
        <div>Watchlist<span className="ms-2">{globalState.watchlist.length}</span></div>
        <button onClick={handleToggleWatchlist}>
          <ArrowIcon
            color="black"
            style={{
              transform: showWatchlist ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </button>
      </div>
      <div
        className="watchlist-list-container"
        style={{ maxHeight: showWatchlist ? 500 : 0 }}
      >
        {globalState.watchlist.length === 0 ? (
          <div>
            <p>Your watchlist is empty.</p>
            <p>You should add some movies.</p>
          </div>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Pos.</th>
                <th>Movie</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {globalState.watchlist.map((wl: any, index: number) => {
                return (
                  <tr key={wl.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link
                        to={`/details/${wl.id}`}
                        className="movie-card-title m-2"
                      >
                        {wl.title}
                      </Link>
                    </td>
                    <td>
                      <button
                        className="whatchlist-minus-button"
                        onClick={() => handleRemoveFromWatchlist(wl)}
                      >
                        <TrashIcon color="currentColor" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
