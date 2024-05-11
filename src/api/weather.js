import axios from "axios";

const apiKey = process.env.WEATHER_API;
const weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=18.56,-68.37&days=3&aqi=no&alerts=no`;
export default function handler(req, res) {
  axios
    .get(weatherUrl)
    .then(function (response) {
      // handle success
      res.status(200).json({ weather: response.data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500).json("Server Error");
    });
}
