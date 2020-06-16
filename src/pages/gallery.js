import React, {useState} from "react"
import {graphql} from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import classes from "./gallery.module.scss"
import {Layout} from "../layout/layout";
import {Carousel, Link, LinkWithSubText} from "../components";
import cx from "classnames";

const GalleryPage = ({data: {gallery}}) => {
    const [loaded, setLoaded] = useState(false);


    const {backgroundImage} = gallery.frontmatter;
    const pictures = gallery.frontmatter.pictures.map((pic) => {
        return {
            label: pic.label,
            img: pic.picture.childImageSharp.fluid
        }
    });

    console.log(loaded);

    return <Layout>
        <BackgroundImage
            className={classes.galleryContainer}
            Tag="div"
            fluid={backgroundImage.childImageSharp.fluid}
            onLoad={() => setLoaded(true)}
        >

            <div className={classes.pageTitle}>
                <h1 className={classes.small}>
                    Les Prés
                </h1>
                <h3>
                    Gallerie
                </h3>
            </div>

            <div className={cx(classes.galleryCarousel, {[classes.visible]: loaded})}>
                <Carousel pictures={pictures}/>
            </div>
        </BackgroundImage>
    </Layout>
}

export default GalleryPage;

export const pageQuery = graphql`
query {
    gallery: markdownRemark(frontmatter: {type: {eq: "gallery"}}) {
    frontmatter {
    backgroundImage {
    childImageSharp {
    fluid(maxWidth: 1920) {
    ...GatsbyImageSharpFluid
}
}
}
    pictures {
    label
    picture {
    childImageSharp {
    fluid(maxWidth: 800, maxHeight: 500) {
     ...GatsbyImageSharpFluid
      ...GatsbyImageSharpFluidLimitPresentationSize
}
}
}
}
}
}
}
`;