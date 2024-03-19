import React, { useState, useEffect } from "react";
import axios from "axios";

const ISROLaunches = () => {
  const apiUrl = "https://services.isrostats.in/api/spacecraft";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchLandingData() {
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setData(response.data);
        } else {
          console.error("Error: Unable to fetch data from the API.");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchLandingData();
  }, [apiUrl]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {currentItems.map((launch, index) => (
        <div key={index}>
          <p>{launch.name}</p>
          <p>{launch.missionStatus}</p>
          <p>{launch.launchDate}</p>
          <p>{launch.launchVehicle}</p>
          <p>{launch.application}</p>
          <p>{launch.orbitType}</p>
          <a href={launch.link}>Launch details</a>
          <hr />
        </div>
      ))}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ISROLaunches;
