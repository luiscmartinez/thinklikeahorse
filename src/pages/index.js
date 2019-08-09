import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section"
import styled from "styled-components"

const IndexPage = ({ data: { allContentfulContainer } }) => {
  console.log("etf", allContentfulContainer.edges[0].node)
  const home = allContentfulContainer.edges[0].node
  return (
    <Layout>
      <SEO title="Home" />
      <HomeWrapper>
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
        <p>
          If you like the site and think it is helpful, feel free to add my link
          to your favorite sites so the information can be shared. Share links
          or information for free - no charging money for my information. Enjoy
          the site and I hope it is beneficial to you and your horse.
        </p>
        <br />
        <p>
          Thanks to everyone for your kind words and comments about the site. It
          is nice to see that the site is being viewed and helping horses in
          Wales, Canada, Spain, New Zealand, South Africa, Russia, China and
          many other locations (see green dots below on map). I provide this
          site and videos for my love of <strong>the Horse!</strong>
        </p>
        <br />
        <p>Happy trails,</p>
        <img
          align="right"
          border="0"
          height="100"
          src={
            "http://www.thinklikeahorse.org/images/walking%20away%20horse.gif"
          }
          width="40"
        />
        <br />
        <section className="center-text box-padding tb-border">
          <p>Rick Gore Horsemanship</p>
          <p>Copyright © 2004</p>
        </section>
        <section style={{ color: "#771b15" }} className="center-text">
          <p>"The Cowboy Code"</p>
          <br />
          <p>
            <p>Live each day with Courage - - Take Pride in your work</p> <br />
            <p>Always finish what you start - - Do what has to be done</p>{" "}
            <br />
            <p>Be tough, but fair - - When you make a promise, keep it</p>{" "}
            <br />
            <p>Ride for the brand - - Talk less and say more</p>
            <br />
            <p>
              Remember some things are not for sale; Know where to draw the
              line.
            </p>
          </p>
        </section>
        <section className="box-padding center-text">
          <a href="index-29.html" target="_blank">
            <img
              border="0"
              align="center"
              height="100"
              src="http://www.thinklikeahorse.org/images/flag%20waving.gif"
              width="170"
            />
          </a>
        </section>
        {/* //! create a remember Verterans component */}
        <section className="box-padding center-text flex">
          <a href="#" style={{ marginBottom: "5px" }}>
            "Remember a Veteran Click Here"
          </a>

          <a href="http://guestscounter.com">
            <img
              src="http://guestscounter.com/count.php?c_style=139&amp;id=1497781528"
              border="0"
              alt="hit counter"
            />
          </a>
        </section>
      </HomeWrapper>
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

const HomeWrapper = styled.div`
  .box-padding {
    padding: 1rem 0;
  }
  .tb-border {
    border-top: 2px solid #57380f;
    border-bottom: 2px solid #57380f;
  }
  .center-text {
    text-align: center;
  }
  .flex {
    display: flex;
    flex-direction: column;
  }
  border-top: 2px solid #57380f;
  border-bottom: 2px solid #57380f;
  padding: 1rem 0;
  color: #57380f;
  h1 {
    text-align: center;
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  a {
    color: #771b15;
    font-weight: 800;
    text-decoration: underline;
  }
  strong {
    font-weight: bold;
  }
  p {
    line-height: 1.5;
    margin-bottom: 2.4rem;
  }
`
