import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default userLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
