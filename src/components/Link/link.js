import React from "react";
import classes from "./link.module.scss"

const LinkWithSubText = ({mainText, sideText}) => {
    return <nav className={classes.clEffect9}>
        <div className={classes.link}><span>{mainText}</span><span>{sideText}</span></div>
    </nav>
}

const Link = ({mainText}) => {
    return <nav className={classes.clEffect4}>
        <div className={classes.link}><span>{mainText}</span></div>
    </nav>
}

export {LinkWithSubText, Link};