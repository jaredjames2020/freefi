import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default getLocationFromString = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;

      let result = await Location.geocodeAsync("Times Square, NYC");
      setLocation({ result });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
