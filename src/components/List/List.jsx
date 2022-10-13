import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
// mui
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

const ContainerStyle = styled("div")(({ theme }) => ({
  padding: "25px",
}));

const LoadingStyle = styled("div")(({ theme }) => ({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const FormControlStyle = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

const GridStyle = styled(FormControl)(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
}));

// ----------------------------------------------------------------------

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <ContainerStyle>
      <Typography variant="h4">Food & Dining around you</Typography>
      {isLoading ? (
        <LoadingStyle>
          <CircularProgress size="5rem" />
        </LoadingStyle>
      ) : (
        <>
          <FormControlStyle>
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
          <FormControlStyle>
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
          <GridStyle container spacing={3}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </GridStyle>
        </>
      )}
    </ContainerStyle>
  );
};

export default List;
