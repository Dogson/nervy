import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel as GatsbyCarousel} from 'react-responsive-carousel';
import Img from "gatsby-image"
import classes from "./carousel.module.scss";
import cx from "classnames";
import "./carousel.css";
import {ArrowLeft, ArrowRight} from "..";

const Carousel = ({pictures}) => {
    const renderThumbs = () => {
        return pictures.map((picture) => (
            <div className={classes.thumbnail}>
                <Img fluid={picture.img} className={classes.thumbImg}/>
            </div>
        ))

    }

    return (
        <GatsbyCarousel showThumbs={false}
                        showIndicators={false}
                        selectedItem
                        infiniteLoop
                        thumbWidth={80}
                        statusFormatter={(current, total) => <><b>{current}</b> sur {total}</>}
                        renderThumbs={renderThumbs}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <div onClick={onClickHandler} className={classes.carrouselArrowPrev}>
                                    <ArrowLeft/>
                                </div>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <div onClick={onClickHandler} className={classes.carrouselArrowNext}>
                                    <ArrowRight/>
                                </div>
                            )
                        }>
            {
                pictures.map(({label, img}) => (
                    <div key={label} className={classes.imageContainer}>
                        <div className={classes.image}>
                            <Img fluid={img} className={classes.imageGatsby} imgStyle={{objectFit: 'contain'}}
                                 style={{height: "100%"}}/>
                        </div>
                        <p className={classes.label}>{label}</p>
                    </div>
                ))
            }
        </GatsbyCarousel>
    );
}

export default Carousel