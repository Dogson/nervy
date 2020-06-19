import React, {useState} from "react"
import classes from "./layout.module.scss"
import {Header} from "../components";
import CircleLoader from "react-spinners/CircleLoader";
import cx from "classnames";

export const Layout = ({children, brightMenu, loading = true}) => {
    return <div className={cx(classes.pageContainer, {[classes.loading]: loading})}>
        {loading && <div className={classes.loadingContainer}>
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