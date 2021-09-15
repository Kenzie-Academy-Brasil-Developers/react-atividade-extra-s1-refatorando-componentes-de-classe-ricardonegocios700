import { useEffect, useState } from "react";
import "./style.css";

const SearchWeather = ({ handleChangeWeather }) => {
  const [inputValue, SetInputValue] = useState("Curitiba");

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = () => {
    fetch(`https://goweather.herokuapp.com/weather/${inputValue}`)
      .then((response) => response.json())
      .then((response) => handleChangeWeather(response, inputValue))
      .catch((err) => console.log(err));
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => SetInputValue(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={() => handleSubmit()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchWeather;
