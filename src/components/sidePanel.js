import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import NavigationLink from "./navigationLink"

const SidePanel = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulContainer(sort: { fields: order }) {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      `}
      render={data => {
        const { allContentfulContainer } = data
        return (
          <SidePanelWrapper>
            <Link to="/" className="header">
              HORSEY PAGES
            </Link>
            {allContentfulContainer.edges.map(({ node }) => {
              return <NavigationLink node={node} />
            })}
          </SidePanelWrapper>
        )
      }}
    />
  )
}

export default SidePanel

const SidePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid green;
  width: 220px;
  background: url(http://www.thinklikeahorse.org/images/block1_tail.jpg);
  .header {
    color: white;
    margin-bottom: 1rem;
    margin-top: 1.4rem;
    font-size: 2rem;
    background: url(http://www.thinklikeahorse.org/images/block1_top.jpg);
    height: 30px;
    text-align: center;
  }
`
