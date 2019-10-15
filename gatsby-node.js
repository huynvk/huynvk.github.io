const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) throw result.errors

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges

    posts.forEach((post, index) => {
      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      })
    })

    return null
  })
}
