import { useEffect, useState } from "react";
// mui
import { CssBaseline, Grid } from "@material-ui/core";
// components
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";
// api
import { getPlacesData } from "../api/index";

// ----------------------------------------------------------------------

const Home = () => {
  const [places, setPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({});

  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  // get user's initial coords
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Grid>
        <Grid
          spacing={2}
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
