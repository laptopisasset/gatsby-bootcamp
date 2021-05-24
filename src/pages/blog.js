import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import { graphql, Link } from "gatsby"

import * as blogStyles from "./blog.module.scss"

export const postsQuery = graphql`
  {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>

      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(({ node }, index) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{node.title}</h2>
              <p>{node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
