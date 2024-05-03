const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
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
      allContentfulTour {
        nodes {
          name
          duration
          included
          whatToBring
          importantInfomation
          mainImage {
            gatsbyImage(formats: WEBP, width: 3000, placeholder: BLURRED)
            title
          }
          shortDescription {
            shortDescription
          }
          price
          category
          url
          mainDescription {
            mainDescription
          }
          secondaryDescription {
            secondaryDescription
          }
          images {
            gatsbyImage(formats: WEBP, width: 3000, placeholder: BLURRED)
            title
            url
          }
        }
      }
    }
  `);
  const tourTemplate = path.resolve(`src/templates/tour.js`);
  queryResults.data.allContentfulTour.nodes.forEach((node) => {
    createPage({
      path: `/tours/${node.url}`,
      component: tourTemplate,
      context: {
        // This time the entire product is passed down as context
        layout: queryResults.data.allContentfulLayout.nodes[0],
        effectImage: queryResults.data.allContentfulAsset.edges[0].node,
        tour: node,
      },
    });
  });
};
