const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulContainer(sort: { fields: order }) {
          edges {
            node {
              id
              order
              title
              slug
              modules {
                ... on ContentfulModule {
                  id
                  title
                  slot {
                    ... on ContentfulSectionPhoto {
                      id
                      photos {
                        file {
                          url
                        }
                        description
                      }
                    }
                    ... on ContentfulSectionQuote {
                      id
                      quote
                    }
                    ... on ContentfulSectionText {
                      id
                      sectionTitle
                      body {
                        body
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulContainer.edges.forEach(({ node }) => {
        if (node.slug !== "home") {
          createPage({
            path: node.slug,
            component: path.resolve("./src/components/container.js"),
            context: node,
          })
        }
      })
      resolve()
    })
  })
}