import React from "react";
import classes from "./header.module.scss"
import {Link} from "..";

const Header = () => {
    return <div className={classes.headerContainer}>
        <div className={classes.menuItem}>
            <Link mainText="Accueil"/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Gallerie"/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Réserver"/>
        </div>
    </div>
}

export default Header;