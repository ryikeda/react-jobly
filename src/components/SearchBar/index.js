import React from "react";
import {
  Container,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <Container maxWidth="sm">
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search"
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
    </Container>
  );
};

export default SearchBar;
