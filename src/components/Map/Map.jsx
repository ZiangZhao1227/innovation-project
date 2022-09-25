import GoogleMapReact from "google-map-react";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Map = () => {
  const coordinates = { lat: 60.192059, lng: 24.945831 };

  return (
    <Box sx={{height:'85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
      >
      </GoogleMapReact>
    </Box>
  )
}

export default Map