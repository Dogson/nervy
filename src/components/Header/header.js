import React from "react";
import classes from "./header.module.scss"
import {Link} from "..";
import cx from "classnames";

const Header = ({bright}) => {
    return <div className={cx(classes.headerContainer, {[classes.bright]: bright})}>
        <div className={classes.menuItem}>
            <Link mainText="Accueil" to={"/"} bright={bright}/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Présentation" to={"/presentation"} bright={bright}/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Gallerie" to={"/gallery"} bright={bright}/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Réserver" to={"https://www.airbnb.fr/rooms/40504440"} external bright={bright}/>
        </div>
    </div>
}

export default Header;