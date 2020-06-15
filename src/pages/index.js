import React from "react"
import {graphql} from "gatsby"
import cx from 'classnames'
import styles from "./index.module.scss"
import TrackVisibility from 'react-on-screen';

const IndexPage = ({data: {homepage: {title}}}) => {
    return <div>HELLO BOY</div>
}

export default IndexPage;

export const pageQuery = graphql`
    query {
        homepage: markdownRemark(frontmatter: {type: {eq: "homepage"}}) {
        frontmatter {
          title
    }
    }
    }
    `;