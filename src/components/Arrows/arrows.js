import React from "react";
import classes from "./arrows.module.scss"
import cx from "classnames";

const ArrowRight = () => {
    return <div className={cx(classes.arrowRight, classes.arrow)}>
        <div className={classes.arrowTop}/>
        <div className={classes.arrowBottom}/>
    </div>
}


const ArrowLeft = () => {
    return <div className={cx(classes.arrowLeft, classes.arrow)}>
        <div className={classes.arrowTop}/>
        <div className={classes.arrowBottom}/>
    </div>
}

const ArrowDown = () => {
    return <div className={classes.arrowDown}>
        <div className={classes.cta}>
            <span className={cx(classes.arrowD, classes.primera, classes.next)}/>
            <span className={cx(classes.arrowD, classes.segunda, classes.next)}/>
        </div>
    </div>
}

export {ArrowRight, ArrowLeft, ArrowDown}