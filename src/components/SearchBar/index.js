import React from "react";
import {
  Container,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <Box m={3}>
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
    </Box>
  );
};

export default SearchBar;
