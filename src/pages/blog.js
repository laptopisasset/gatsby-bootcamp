import React from "react"

import Layout from "../components/layout"

import { graphql } from "gatsby"

export const postsQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>

      <ol>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
