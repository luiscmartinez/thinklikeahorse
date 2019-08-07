import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = ({ data: { allContentfulContainer } }) => {
  console.log("etf", allContentfulContainer.edges[0].node)
  const home = allContentfulContainer.edges[0].node
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        Hi horse people to {home.coverImage.title} a lovely place to learn new
        skill to better your relationship with your horse
      </h1>
      <img
        style={{ width: "100%" }}
        src={`https:${home.coverImage.file.url}`}
      />
      <strong className="box-padding center-text">
        <p>
          <em>
            I HAVE OVER{" "}
            <a
              href="https://www.youtube.com/channel/UCwdVL0L9ljq3McWMXWrUVdg"
              target="_blank"
              rel="noopener noreferrer"
            >
              1150 VIDEOS{" "}
            </a>
            FREE ON YOUTUBE WHERE I DISCUSS HORSE AND HERD BEHAVIOR,
            HORSEMENSHIP AND HORSE TOPICS.
          </em>
        </p>
      </strong>
      <a
        href="https://www.youtube.com/channel/UCwdVL0L9ljq3McWMXWrUVdg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="center-text box-padding tb-border">
          <i>CLICK HERE FOR "THINK LIKE A HORSE VIDEOS"</i>
        </div>
      </a>
      <br />
      {home.modules.map((section, i) => {
        return <Section key={section.id} section={section} />
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allContentfulContainer(filter: { slug: { eq: "home" } }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
            id
            title
            file {
              url
              fileName
            }
            description
          }
          modules {
            ... on ContentfulModule {
              id
              title
              slot {
                ... on ContentfulSectionPhoto {
                  id
                  url
                  photos {
                    file {
                      url
                    }
                    description
                    title
                    id
                  }
                }
                ... on ContentfulSectionQuote {
                  id
                  quote
                }
                ... on ContentfulSectionText {
                  id
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
`
