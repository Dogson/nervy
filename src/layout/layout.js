import React from "react"
import classes from "./layout.module.scss"

export const Layout = ({children}) => {
    return <div className={classes.pageContainer}>
        {children}
    </div>
}