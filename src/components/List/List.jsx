import { useState } from "react";
// mui
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import PlaceDetails from "../PlaceDetails/PlaceDetails";

// ----------------------------------------------------------------------

const ContainerStyle = styled("div")(() => ({
  padding: "25px",
}));

const FormControlStyle = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

const GridStyle = styled(Grid)(() => ({
  height: "75vh",
  overflow: "auto",
}));

// ----------------------------------------------------------------------

const List = () => {
  const [type, setType] = useState("restaurants");

  const [rating, setRating] = useState("");

  //dummy data
  const places = [
    { name: "Cool place" },
    { name: "Best Beer" },
    { name: "Best steak" },
    { name: "Cool place" },
    { name: "Best Beer" },
    { name: "Best steak" },
    { name: "Cool place" },
    { name: "Best Beer" },
    { name: "Best steak" },
    { name: "Cool place" },
    { name: "Best Beer" },
    { name: "Best steak" },
  ];

  return (
    <ContainerStyle>
      <Typography variant="h4">Food & Dining around you</Typography>
      <FormControlStyle variant="standard">
        <InputLabel id="type">Type</InputLabel>
        <Select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControlStyle>
      <FormControlStyle variant="standard">
        <InputLabel id="rating">Rating</InputLabel>
        <Select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControlStyle>
      {places && (
        <GridStyle container spacing={3}>
          {places.map((place, i) => (
            <Grid key={i} item xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </GridStyle>
      )}
    </ContainerStyle>
  );
};

export default List;
