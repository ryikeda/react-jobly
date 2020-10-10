import React from "react";
import {
  Container,
  TextField,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Companies = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box m={3}>
        <Container maxWidth="sm">
          <TextField
            variant="outlined"
            fullWidth
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
      <Card>
        <CardContent>
          <Typography variant="h6"> Company name</Typography>
          <Typography variant="body2" component="p">
            Company description
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Companies;
