import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        What a horse does under compulsion, is done without understanding; if it
        is done without understanding there is no beauty in it, anymore than if
        you took a spur or whip to a dancer.
      </p>
      <span>Email - Horsyguy@Yahoo.com</span>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  text-align: center;
`
