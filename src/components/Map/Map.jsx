// google-map-react
import GoogleMapReact from "google-map-react";
// mui
import { Box, Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocationOnOutlined } from "@material-ui/icons";

// ----------------------------------------------------------------------

const MarkerContainerStyle = styled("div")(() => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));

const PaperStyle = styled(Paper)(() => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
}));

// ----------------------------------------------------------------------

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}) => {
  const isDeskTop = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ height: "85vh", width: "100%", mt: 4 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) =>
          place.name ? (
            <MarkerContainerStyle
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDeskTop ? (
                <LocationOnOutlined
                  color="primary"
                  fontSize="large"
                ></LocationOnOutlined>
              ) : (
                <PaperStyle elevation={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </PaperStyle>
              )}
            </MarkerContainerStyle>
          ) : (
            <></>
          )
        )}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
