import React from "react"
import classes from "./layout.module.scss"
import {Header} from "../components";

export const Layout = ({children}) => {
    return <div className={classes.pageContainer}>
        <Header/>
        {children}
    </div>
}