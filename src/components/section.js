import React, { Fragment } from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import SectionImages from "./sectionPhoto"

const Section = ({ section }) => {
  return (
    <SectionWrapper>
      <title>{section.title}</title>
      {section.slot.map((slot, i) => {
        const sectionArr = []
        switch (slot.__typename) {
          case "ContentfulSectionText":
            sectionArr.push(
              <Fragment key={i}>
                <ReactMarkdown source={slot.body.body} />
              </Fragment>
            )
            break
          case "ContentfulSectionQuote":
            sectionArr.push(<q key={i}>{slot.quote}</q>)
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
  border-top: 2px solid red;
  border-bottom: 2px solid pink;
`
