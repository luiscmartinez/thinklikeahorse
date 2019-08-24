import React from "react"
import styled from "styled-components"

const Quote = ({ quote }) => {
  return <QuoteWrapper>{quote}</QuoteWrapper>
}

export default Quote

const QuoteWrapper = styled.q`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: fantasy;
  font-weight: bold;
  margin-top: 0.5rem;
`
