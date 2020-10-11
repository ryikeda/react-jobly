import React, { useState } from "react";
import {
  Container,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ handleSearch }) => {
  const [search, setSeach] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  const handleChange = (e) => {
    setSeach(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search"
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Container>
  );
};

export default SearchBar;
