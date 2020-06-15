import React from "react"
import {graphql} from "gatsby"

const IndexPage = ({data: {homepage: {title}}}) => {
    return <div>HELLO BOY</div>
}

export default IndexPage;

export const pageQuery = graphql`
    query {
        homepage: markdownRemark(frontmatter: {type: {eq: "homepage"}}) {
        frontmatter {
          title,
           backgroundImage {
              childImageSharp {
                fluid(maxWidth: 1080) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
    }
    }
    }
    `;