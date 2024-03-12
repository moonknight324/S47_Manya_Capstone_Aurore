import { useEffect, useState } from "react";
import axios from "axios";

function MarsRover() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=" +
    apiKey;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          setPhotos(response.data.photos);
          console.log(response.data.photos);
        } else {
          console.error("Error: Unable to fetch data from the API.");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchData();
  }, [apiUrl]);

  return (
    <>
      <div>
        <h1>Photos by Curiosity Rover</h1>
        <ul>
          {photos.map((photo, index) => (
            <li key={index}>
              <p>Camera Name: {photo.camera.full_name}</p>
              <p>Earth Date: {photo.earth_date}</p>
              <img src={photo.img_src}></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MarsRover;
