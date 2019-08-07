import React from "react"
import styled from "styled-components"
import Banner from "./banner"
import Footer from "./footer"

const Content = ({ children }) => {
  return (
    <ContentWrapper>
      <Banner />
      <main
        style={{
          backgroundColor: "#fdefc7",
          padding: "0 0.5rem",
        }}
      >
        {children}
      </main>
      <Footer />
    </ContentWrapper>
  )
}

export default Content

const ContentWrapper = styled.div`
  border: 2px solid yellow;
  width: 700px;
`
