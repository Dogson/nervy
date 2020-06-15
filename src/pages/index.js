import React from "react"
import {graphql} from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import classes from "./index.module.scss"
import {Layout} from "../layout/layout";

const IndexPage = ({data: {homepage}}) => {
    const {title, backgroundImage} = homepage.frontmatter;
    return <Layout>
        <BackgroundImage
            className={classes.homepageContainer}
            Tag="div"
            fluid={backgroundImage.childImageSharp.fluid}
            backgroundColor={`#fff`}
            opacity={0.7}
        >
                <div className={classes.pageTitle}>{title}</div>
        </BackgroundImage>
    </Layout>
}

export default IndexPage;

export const pageQuery = graphql`
    query {
        homepage: markdownRemark(frontmatter: {type: {eq: "homepage"}}) {
        frontmatter {
          title,
           backgroundImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
    }
    }
    }
    `;