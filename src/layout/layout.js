import React from "react"
import classes from "./layout.module.scss"
import {Header} from "../components";

export const Layout = ({children, brightMenu}) => {
    return <div className={classes.pageContainer}>
        <Header bright={brightMenu}/>
        {children}
    </div>
}