import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"
import Section from "./section"

const Container = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <SEO title={pageContext.title} />

      {pageContext.modules.map(section => {
        return <Section key={section.id} section={section} />
      })}
    </Layout>
  )
}

export default Container
