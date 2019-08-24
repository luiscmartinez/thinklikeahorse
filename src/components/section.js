import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import SectionImages from "./sectionPhoto"
import Quote from "./quote"

const Section = ({ section }) => {
  return (
    <SectionWrapper>
      {section.slot[0].__typename !== "ContentfulSectionQuote" && (
        <h1>{section.title || section.sectionTitle}</h1>
      )}
      {section.slot.map((slot, i) => {
        const sectionArr = []
        switch (slot.__typename) {
          case "ContentfulSectionText":
            if (slot.body !== null) {
              sectionArr.push(
                <Fragment key={i}>
                  <ReactMarkdown source={slot.body.body} />
                </Fragment>
              )
            }
            break
          case "ContentfulSectionQuote":
            sectionArr.push(<Quote key={i} quote={slot.quote} />)
            break
          case "ContentfulSectionPhoto":
            sectionArr.push(<SectionImages key={i} photos={slot.photos} />)
          default:
            break
        }
        return <Fragment key={i}>{sectionArr}</Fragment>
      })}
    </SectionWrapper>
  )
}

export default Section

const SectionWrapper = styled.section`
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
  img {
    width: 100%;
  }
`
