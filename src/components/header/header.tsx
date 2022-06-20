import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/store";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState<string>("");
  //@ts-ignore
  const { globalState, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery && searchQuery !== "") {
      //@ts-ignore
      dispatch({type: "SET_SEARCH_RESULTS", load: { search: searchQuery}});
      setSearchQuery("");
      navigate("/");
    }
  };

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  } 

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === "Enter"){
      handleSearch()
    }
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>RegalVoice Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/instructions" className="nav-link">
              Instructions
            </Link>
          </Nav>
          <div className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="Search Movie"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleOnChangeSearch}
              onKeyDown={handleKeyPress}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
