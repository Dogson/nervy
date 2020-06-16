import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel as GatsbyCarousel} from 'react-responsive-carousel';
import Img from "gatsby-image"
import classes from "./carousel.module.scss";
import cx from "classnames";

const Carousel = ({pictures}) => {
    const renderThumbs = () => {
        return pictures.map((picture) => (
            <div className={classes.thumbnail}>
                <Img fluid={picture.img}/>
            </div>
        ))

    }

    return (
        <GatsbyCarousel showThumbs renderThumbs={renderThumbs} showIndicators={false}>
            {
                pictures.map(({label, img}) => (
                    <div key={label} className={classes.imageContainer}>
                        <div className={classes.image}>
                            <Img fluid={img} className={classes.imageGatsby}/>
                        </div>
                        {label && <p className={cx("legend", classes.label)}>{label}</p>}
                    </div>
                ))
            }
        </GatsbyCarousel>
    );
}

export default Carousel