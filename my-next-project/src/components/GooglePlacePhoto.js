import { useState, useEffect } from "react";

function GooglePlacePhoto({ placeId }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    async function fetchPhotoUrl() {
      const photoReference = await fetchPlaceDetails(placeId);
      if (photoReference) {
        setPhotoUrl(
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.GOOGLE_API_KEY}`
        );
      }
    }
    fetchPhotoUrl();
  }, [placeId]);

  if (photoUrl) {
    return <img src={photoUrl} alt="" />;
  } else {
    return <p>No photo available.</p>;
  }
}

export default GooglePlacePhoto;
