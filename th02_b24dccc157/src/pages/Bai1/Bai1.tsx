import React, { useState } from "react";
import axios from "axios";
import "./Bai1.css"
interface Weather {
  current_condition: {
    temp_C: string;
    weatherDesc: { value: string }[];
    windspeedKmph: number;
  }[];
  nearest_area: {
    areaName: { value: string }[];
    country: { value: string }[];
  }[];
}

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      if (!city) return;
      setError("");
      const res = await axios.get<Weather>(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch (err) {
      setError("Không tìm thấy dữ liệu ");
      setWeather(null);
    }
  };

  return (
    <div className="weather-app">
      <h2> Tra cứu thời tiết</h2>
      <div className="search">
        <input
          type="text"
          placeholder="Nhập tên thành phố..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Tìm</button>
      </div>

      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h3>
            {weather.nearest_area[0].areaName[0].value},{" "}
            {weather.nearest_area[0].country[0].value}
          </h3>
          <h2>{weather.current_condition[0].weatherDesc[0].value}</h2>
          <p> Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Gió: {weather.current_condition[0].windspeedKmph} km/h</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
