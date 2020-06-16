import React, {useState} from "react"
import {graphql} from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import classes from "./index.module.scss"
import {Layout} from "../layout/layout";
import {Link, LinkWithSubText} from "../components";
import cx from "classnames";

const IndexPage = ({data: {homepage}}) => {

    const {backgroundImage} = homepage.frontmatter;
    return <Layout>
        <BackgroundImage
            className={classes.homepageContainer}
            Tag="div"
            fluid={backgroundImage.childImageSharp.fluid}
        >

            <div className={classes.pageTitle}>
                <h1>
                    Les Prés
                </h1>
                <h2>
                    Mas Ardéchois
                </h2>
            </div>
            <div className={classes.titleLink}>
                <LinkWithSubText
                    mainText="Visiter le mas"
                    sideText="Commencer la visite"/>
            </div>
        </BackgroundImage>
    </Layout>
}

export default IndexPage;

export const pageQuery = graphql`
    query {
        homepage: markdownRemark(frontmatter: {type: {eq: "gallery"}}) {
        frontmatter {
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