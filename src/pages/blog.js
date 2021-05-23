import React from "react"

import Layout from "../components/layout"

import { graphql, Link } from "gatsby"

import * as blogStyles from "./blog.module.scss"

export const postsQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
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

      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${node.fields.slug}`}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
