import React, { useState } from "react";
import GoolgleMapReact from "google-map-react";
import Marker from "./Marker";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export const ExampleMap = ({}) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };
  const [center, setCenter] = useState({ lat: 35.7022589, lng: 139.7744733 });
  const [zoom, setZoom] = useState(11);

  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY, "#KEY!!");
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoolgleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={35.7022589}
          lng={139.7744733}
          name="My Marker"
          color="blue"
        />
      </GoolgleMapReact>
    </div>
  );
};
