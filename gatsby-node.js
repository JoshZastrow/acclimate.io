const _ = require("lodash")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw result.errors
  }

  const blogPost = path.resolve("./src/templates/blog-post.js")

  // Create blog posts pages.
  _.each(result.data.allMarkdownRemark.edges, edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: blogPost,
      context: {
        slug: edge.node.frontmatter.path,
      },
    })
  })
}
