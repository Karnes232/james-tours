import React from "react";
import Layout from "../components/Layout/Layout";
import TourPageHero from "../components/TourPageComponents/HeroComponent/TourPageHero";
import TextComponent from "../components/TextComponent/TextComponent";
import CheckAvailabilityButton from "../components/TourPageComponents/CheckAvailabilityButton/CheckAvailabilityButton";
import TourInfo from "../components/TourPageComponents/TourInfo";
import AboutThisTour from "../components/TourPageComponents/AboutThisTour/AboutThisTour";
import TourSwiperCarousel from "../components/TourPageComponents/SwiperCarouselComponent/TourSwiperCarousel";
import Seo from "../components/SEO/seo";

const Tour = ({ pageContext }) => {
  return (
    <>
      <Layout
        layoutData={pageContext.layout}
        effectImage={pageContext.effectImage.gatsbyImage}
      >
        <TourPageHero
          tour={pageContext.tour}
          effectImage={pageContext.effectImage}
        />
        <div className="max-w-5xl my-5 mx-5 xl:mx-auto">
          <TourInfo category={pageContext.tour.category} />
          <button
            type="submit"
            // onClick={handleClick}
            className={`bg-primary-color text-secondary-color font-bold py-1 px-4 rounded-full`}
          >
            Book Now
          </button>
          <TextComponent
            paragraph={pageContext.tour.shortDescription.shortDescription}
            paragraphClassName="my-4 lg:mb-0 xl:text-xl"
          />

          <AboutThisTour
            duration={pageContext.tour.duration}
            included={pageContext.tour.included}
            whatToBring={pageContext.tour.whatToBring}
            importantInfomation={pageContext.tour.importantInfomation}
          />
        </div>

        <TourSwiperCarousel
          images={pageContext.tour.images}
          effectImage={pageContext.effectImage}
        />

        <div className="max-w-5xl my-5 mx-5 xl:mx-auto">
          <TextComponent
            paragraph={pageContext.tour.mainDescription.mainDescription}
            paragraphClassName="my-4 lg:mb-0 xl:text-xl"
            mainDivClassName="xl:mt-10"
          />
          <TextComponent
            paragraph={
              pageContext.tour.secondaryDescription.secondaryDescription
            }
            paragraphClassName="my-4 xl:text-xl"
            mainDivClassName="xl:mb-10"
          />
        </div>

        <CheckAvailabilityButton price={pageContext.tour.price} />
      </Layout>
    </>
  );
};

export default Tour;

export const Head = ({ pageContext }) => {
  return (
    <>
      <Seo
        title={pageContext.tour.name}
        description={pageContext.tour.shortDescription.shortDescription}
        keywords={pageContext.tour.keywords?.join(", ")}
        // schemaMarkup={{
        //   "@context": "https://schema.org/",
        //   "@type": "Product",
        //   name: pageContext.tour.name,
        //   image: `https://www.puntacanatourstore.com${pageContext.tour.mainImage.gatsbyImage.images.fallback.src}`,
        //   description: pageContext.tour.shortDescription.shortDescription,
        // }}
      />
      <link
        rel="canonical"
        href={`https://puntacanaexperience.com/tours/${pageContext.tour.url}`}
      />
    </>
  );
};
