import axios from "axios";

const apiKey = process.env.CURRENCY_API;
const cadUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/CAD/DOP`;
const usdUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/DOP`;
const euroUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/EUR/DOP`;

export default function handler(req, res) {
  axios
    .get(usdUrl)
    .then(function (response) {
      // handle success
      res.status(200).json({ rate: response.data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.status(500).json("Server Error");
    });
}
