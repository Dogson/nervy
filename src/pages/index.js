import React, {useState} from "react"
import {graphql} from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import classes from "./index.module.scss"
import {Layout} from "../layout/layout";
import {ArrowDown, Link, LinkWithSubText, PolaroidCard} from "../components";
import cx from "classnames";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        const homeRef = React.createRef();
        const exteriorRef = React.createRef();

        this.state = {
            refs: [homeRef, exteriorRef],
            currentElement: 0,
            loaded: false
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleArrowKeyPress = this.handleArrowKeyPress.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('keydown', this.handleArrowKeyPress, false);
        window.addEventListener("wheel", this.handleWheel, {passive: false});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('keydown', this.handleArrowKeyPress, false);
        window.removeEventListener("wheel", this.handleWheel, {passive: false});
    }

    preventScroll() {
        return (window.innerHeight < this.state.refs[0].current.clientHeight ||
            window.innerHeight < this.state.refs[1].current.clientHeight)
    }

    handleWheel(e) {
        if (this.preventScroll()) {
            return;
        }

        e.preventDefault();
        if (e.deltaY > 0) {
            const elementToScroll = this.state.currentElement + 1 < this.state.refs.length ? this.state.currentElement + 1 : this.state.currentElement;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: 'smooth'});
        } else {
            const elementToScroll = this.state.currentElement > 0 ? this.state.currentElement - 1 : 0;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: "smooth"});
        }
    }

    handleScroll() {
        if (window.pageYOffset >= window.innerHeight - 1) {
            this.setState({renderHeaderFooter: true});
        } else if (this.state.renderHeaderFooter) {
            this.setState({renderHeaderFooter: false});
        }
    }


    handleArrowKeyPress(e) {
        if (!this.preventScroll() && e.keyCode === 40) {
            e.preventDefault();
            const elementToScroll = this.state.currentElement + 1 < this.state.refs.length ? this.state.currentElement + 1 : this.state.currentElement;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: 'smooth'});
            this.setState({currentElement: elementToScroll});

        } else if (!this.preventScroll() && e.keyCode === 38) {
            e.preventDefault();
            const elementToScroll = this.state.currentElement > 0 ? this.state.currentElement - 1 : 0;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: "smooth"});
            this.setState({currentElement: elementToScroll});
        }
    }

    render() {
        const {data: {homepage}} = this.props;
        const {loaded} = this.state;
        let {houseBackgroundImage, homeBackgroundImage, housePictures} = homepage.frontmatter;
        housePictures = housePictures.map((pic) => {
            return {
                label: pic.label,
                image: pic.picture.childImageSharp.fixed
            }
        });
        return <Layout loading={!loaded}>
            <section className={classes.homeSection}
                     ref={this.state.refs[0]}
                     onMouseEnter={(e) => {
                         this.setState({currentElement: 0});
                     }}>
                <BackgroundImage
                    className={classes.homepageContainer}
                    Tag="div"
                    fluid={homeBackgroundImage.childImageSharp.fluid}
                    onStartLoad={() => this.setState({loaded: false})}
                    onLoad={() => this.setState({loaded: true})}
                >

                    <div className={classes.pageTitle}>
                        <h1>
                            Les Prés
                        </h1>
                        <h2>
                            Mas Ardéchois
                        </h2>
                    </div>
                    <div className={classes.titleLink}>
                        <LinkWithSubText
                            onClick={() => this.state.refs[1].current.scrollIntoView({behavior: "smooth"})}
                            mainText="Visiter le mas"
                            sideText="Commencer la visite"/>
                    </div>
                </BackgroundImage>
            </section>

            <section className={classes.homeSection}
                     ref={this.state.refs[1]}
                     onMouseEnter={(e) => {
                         this.setState({currentElement: 1});
                     }}>
                <BackgroundImage
                    className={classes.homepageContainer}
                    Tag="div"
                    fluid={houseBackgroundImage.childImageSharp.fluid}
                    onStartLoad={() => this.setState({loaded: false})}
                    onLoad={() => this.setState({loaded: true})}
                >

                    <div className={classes.sectionTitle}>
                        <h1 className={classes.medium}>
                            Une grande location <br/>au coeur de l'Ardèche
                        </h1>
                    </div>
                    <div className={classes.pictures}>
                        {housePictures.map((housePicture, i) => {
                            return <PolaroidCard image={housePicture.image} text={housePicture.label}
                                                 tiltedRight={i % 2 === 0}/>
                        })}
                    </div>
                    <div className={classes.nextSectionBtn}>
                        <ArrowDown/>
                    </div>
                </BackgroundImage>
            </section>
        </Layout>
    }


}

export default IndexPage;

export const pageQuery = graphql`
    query {
        homepage: markdownRemark(frontmatter: {type: {eq: "homepage"}}) {
        frontmatter {
           homeBackgroundImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
             houseBackgroundImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            housePictures {
                label   
                picture {
                    childImageSharp {
                         fixed(width: 300, height: 225) {
                             ...GatsbyImageSharpFixed
                       }
                    }
                }
             }
         }
    }
    }
    `;