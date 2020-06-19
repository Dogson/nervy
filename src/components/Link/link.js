import React from "react";
import classes from "./link.module.scss"
import {Link as GatsbyLink} from "gatsby";
import cx from "classnames";

const LinkWithSubText = ({mainText, sideText, onClick}) => {
    return <nav className={classes.clEffect9} onClick={onClick}>
        <div className={classes.link}><span>{mainText}</span><span>{sideText}</span></div>
    </nav>
}

const Link = ({mainText, external, to, bright}) => {

    return <nav className={classes.clEffect4}>
        <div className={cx(classes.link, {[classes.bright]: bright})}>
            {
                external ?
                    <a target="_blank" rel="noopener noreferrer" href={to}>{mainText}</a> :
                    to ?
                        <GatsbyLink to={to} activeClassName={classes.active}>{mainText}</GatsbyLink> :
                        <span>{mainText}</span>
            }
        </div>
    </nav>
}

export {LinkWithSubText, Link};