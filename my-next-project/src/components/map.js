import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function MapLoad({ cityOne_Coord, cityTwo_Coord }) {
  const center = useMemo(() => ({ lat: 20, lng: 10 }), []);

  return (
    <GoogleMap zoom={2} center={center} mapContainerClassName="map-container">
      <Marker position={{ lat: cityOne_Coord.lat, lng: cityOne_Coord.lng }} />
      <Marker position={{ lat: cityTwo_Coord.lat, lng: cityTwo_Coord.lng }} />
    </GoogleMap>
  );
}

function CoordCalc(valueOne, valueTwo) {
  let num = (valueOne + valueTwo) / 2;
  num = Math.round(num * 10) / 10;

  return num;
}

export default function Map({ city_One, city_Two }) {
  const cityOne = {
    lng: CoordCalc(
      Object.values(city_One.bounding_box.latlon)[0],
      Object.values(city_One.bounding_box.latlon)[3]
    ),
    lat: CoordCalc(
      Object.values(city_One.bounding_box.latlon)[1],
      Object.values(city_One.bounding_box.latlon)[2]
    ),
  };
  const cityTwo = {
    lng: CoordCalc(
      Object.values(city_Two.bounding_box.latlon)[0],
      Object.values(city_Two.bounding_box.latlon)[3]
    ),
    lat: CoordCalc(
      Object.values(city_Two.bounding_box.latlon)[1],
      Object.values(city_Two.bounding_box.latlon)[2]
    ),
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapLoad cityOne_Coord={cityOne} cityTwo_Coord={cityTwo} />;
}
