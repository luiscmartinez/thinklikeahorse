/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CSSReset from "../styles/global"
import SidePanel from "./sidePanel"
import Content from "./content"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <CSSReset />
      <SidePanel />
      <Content children={children} />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const LayoutWrapper = styled.div`
  border: 3px solid blue;
  display: flex;
  justify-content: center;
`
