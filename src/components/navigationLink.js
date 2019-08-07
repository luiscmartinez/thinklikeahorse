import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavigationLink = ({ node }) => {
  return (
    <LinkWrapper key={node.id} to={node.slug !== "home" ? node.slug : "/"}>
      {node.title}
    </LinkWrapper>
  )
}

export default NavigationLink

const LinkWrapper = styled(Link)`
  color: #dfd2ae;
  margin-bottom: 1rem;
  border-bottom: 2px solid white;
`
