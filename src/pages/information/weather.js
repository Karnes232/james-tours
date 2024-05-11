import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Seo from "../../components/SEO/seo";
import axios from "axios";
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import SecondaryHero from "../../components/SecondaryImageComponent/SecondaryHero";
import WeatherComponent from "../../components/WeatherComponent/WeatherComponent";
const Weather = ({ data }) => {
  const [weatherLocation, setWeatherLocation] = useState(null);
  const [weatherCurrent, setWeatherCurrent] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    axios.get(`/api/weather`).then((res) => {
      const weather = res.data;
      setWeatherLocation(weather.weather.location);
      setWeatherCurrent(weather.weather.current);
      setWeatherForecast(weather.weather.forecast.forecastday);
    });
  }, []);

  console.log(weatherForecast);

  return (
    <>
      <Layout
        layoutData={data.allContentfulLayout.nodes[0]}
        effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
      >
        <HeroImageComponent
          image={
            data.allContentfulPageLayout.edges[0].node.pageHeroImage.gatsbyImage
          }
          effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
          title={data.allContentfulPageLayout.edges[0].node.title1}
          dark
        />
        <div className="my-10 xl:my-15 mx-5">
          <TextComponent
            title={data.allContentfulPageLayout.edges[0].node.title2}
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph1.paragraph1
            }
            titleClassName="mb-5 2xl:mb-10 text-3xl md:text-4xl lg:text-6xl font-lato"
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
          <TextComponent
            paragraph={
              data.allContentfulPageLayout.edges[0].node.paragraph2.paragraph2
            }
            paragraphClassName="mb-4 lg:mb-0 xl:text-xl"
          />
        </div>
        <SecondaryHero
          backgroundImage={
            data.allContentfulPageLayout.edges[0].node.secondaryImage
          }
          effectImage={data.allContentfulAsset.edges[0].node.gatsbyImage}
        />
        <div className="flex justify-end mx-5 mt-5">
          <label class="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {checked ? "Celsius" : "Fahrenheit"}
            </span>
          </label>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly 2xl:space-x-10 mx-auto">
          {weatherCurrent && (
            <WeatherComponent weather={weatherCurrent} checked={checked} />
          )}
        </div>
        <div className="">weather</div>
        <div>
          <img src={`https:${weatherCurrent?.condition?.icon}`} />
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulLayout {
      nodes {
        title
        tourCompanyName
        email
        facebook
        instagram
        tiktok
        logo {
          gatsbyImage(formats: WEBP, width: 400)
        }
        footerBackground {
          gatsbyImage(formats: WEBP, width: 2000, placeholder: BLURRED)
          title
        }
      }
    }
    allContentfulAsset(filter: { filename: { eq: "effect-shape.png" } }) {
      edges {
        node {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1500)
          filename
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Weather" } }) {
      edges {
        node {
          title
          description {
            description
          }
          keywords
          schema {
            internal {
              content
            }
          }
        }
      }
    }
    allContentfulPageLayout(filter: { pageName: { eq: "Weather" } }) {
      edges {
        node {
          pageHeroImage {
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 3000)
            title
          }
          secondaryImage {
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 3000)
            title
          }
          title1
          title2
          title3
          title4
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          paragraph3 {
            paragraph3
          }
        }
      }
    }
  }
`;

export default Weather;

export const Head = ({ data }) => {
  const { title, description, keywords, schema } =
    data.allContentfulSeo.edges[0].node;
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
        schemaMarkup={schema?.internal?.content}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/weather" />
    </>
  );
};
