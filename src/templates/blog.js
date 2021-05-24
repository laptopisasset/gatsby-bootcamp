import React from "react"

import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const assets = new Map(
    data.contentfulBlogPost.body.references.map(ref => [ref.contentful_id, ref])
  )
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const url = assets.get(node.data.target.sys.id).file.url
        const alt = assets.get(node.data.target.sys.id).title
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  )
}

export default Blog
