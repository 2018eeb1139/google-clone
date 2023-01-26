import React, { useState, useEffect } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const Search = ({ hideButtons }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} variant="outlined" type="submit">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button onClick={search} variant="outlined" type="submit">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
