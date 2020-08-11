import { useEffect, useState } from "react";
import axios from "axios";

export default getData = () => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getListing() {
      const result = await axios(
        "https://data.cityofnewyork.us/resource/yjub-udmw.json"
      );
      setListing(result.data);
      setLoading(false);
    }
    getListing();
  }, []);

  return { listing, loading };
};
