import React, {useState} from "react"
import classes from "./layout.module.scss"
import {Header} from "../components";
import CircleLoader from "react-spinners/CircleLoader";

export const Layout = ({children, brightMenu, loading = true}) => {
    return <div className={classes.pageContainer}>
        {loading && <div className={classes.loading}>
            <div className={classes.spinner}>
                <CircleLoader
                    size={20}
                    color="#e5eaf5"
                />
            </div>
        </div>
        }
        <Header bright={brightMenu}/>
        {children}
    </div>
}