import React from "react";
import classes from "./header.module.scss"
import {Link} from "..";

const Header = () => {
    return <div className={classes.headerContainer}>
        <div className={classes.menuItem}>
            <Link mainText="Accueil" to={"/"}/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Présentation" to={"/presentation"}/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Gallerie" to={"/gallerie"}/>
        </div>
        <div className={classes.menuItem}>
            <Link mainText="Réserver" to={"https://www.airbnb.fr/rooms/40504440"} external/>
        </div>
    </div>
}

export default Header;