import React from "react";
import ReactCardFlip from 'react-card-flip';
import Img from "gatsby-image";
import classes from "./polaroidCard.module.scss";
import cx from "classnames";

export default class PolaroidCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleFlip = this.handleFlip.bind(this);
    }

    handleFlip(e) {
        debugger;
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

    render() {
        const {image, text, tiltedRight} = this.props;
        return (
            <div className={cx(classes.cardContainer, {[classes.titledRight] : tiltedRight})}>
                <Img fixed={image} className={classes.image}/>
                <div className={classes.label}>{text}</div>
            </div>
        )
    }
}