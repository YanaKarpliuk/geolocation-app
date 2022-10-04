import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import Result from "./components/Result";
import NoData from "./components/NoData";

function App() {
  const [cityData, setCityData] = useState({
    city: "",
    country: "",
    lat: "",
    lon: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = e.target.city.value;
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=ea2a26249b4ba626f8db64fc0f2d201a`;

    if (city !== "") {
      axios.get(apiUrl).then((result) => {
        if (result.data.length === 0) {
          alert("There is no such city");
        } else {
          const item = result.data[0];
          setCityData({
            city: item.name,
            country: item.country,
            lat: item.lat,
            lon: item.lon,
          });
        }
      });
    } else if (city === "") {
      alert("Please enter the name of the city");
    }
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      {cityData.country ? (
        <Result
          city={cityData.city}
          country={cityData.country}
          lat={cityData.lat}
          lon={cityData.lon}
        />
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default App;
