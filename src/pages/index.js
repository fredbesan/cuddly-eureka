import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Layout, Hero } from '../components/common'
import workChatImg from '../images/undraw_work_chat_erdt.svg'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Home = () => (
        <>
            <Layout>
                {/* <!-- Hero content: will be in the middle --> */}
                <Hero>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-desktop is-vcentered is-gapless">
                                <div className="column has-text-centered is-hidden-mobile">
                                    <div className="testimonials-slider">
                                        <input id="carousel-1" type="radio" name="carousel" checked/>
                                        <input id="carousel-2" type="radio" name="carousel"/>
                                        <input id="carousel-3" type="radio" name="carousel"/>
                                        <div className="carousel-slides">
                                            <div className="carousel-inner">
                                                <div className="carousel-item">
                                                    <div className="testimonial-block">
                                                        <img className="avatar" src={workChatImg}/>
                                                        <h5 className="title is-5 is-spaced quote">Todos son bienvenidos a unirse y contribuir</h5>
                                                        <h6 className="subtitle is-6">Todos pueden contribuir a tu campaña abierta, lo único que necesitas es personas que crean en tu misión</h6>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <div className="testimonial-block">
                                                        <img className="avatar" src={workChatImg}/>
                                                        <h5 className="title is-5 is-spaced">Todos son bienvenidos a unirse y contribuir</h5>
                                                        <h6 className="subtitle is-6">Todos pueden contribuir a tu campaña abierta, lo único que necesitas es personas que crean en tu misión</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-nav">
                                            <label htmlFor="carousel-1"></label>
                                            <label htmlFor="carousel-2"></label>
                                        </div>
                                    </div>
                                    {/* <figure className="image" style={{ marginBottom: `48px` }}>
                                    <img src={workChatImg} alt="Work Chat Erdt Image"/>
                                </figure>
                                <h5 className="title is-5 is-spaced">Todos son bienvenidos a unirse y contribuir</h5>
                                <h6 className="subtitle is-6">Todos pueden contribuir a tu campaña abierta, lo único que necesitas es personas que crean en tu misión</h6> */}
                                </div>
                                <div className="column is-1">
                                </div>
                                <div className="column">
                                    <h1 className="title is-1">Crea una colecta.</h1>
                                    <h5 className="title is-5 is-spaced">Un grupo de personas que comparten la misión de potenciar las causas sociales a traves del marketing</h5>
                                    <h6 className="subtitle is-6">Crea una colecta y libera el poder de la comunidad para darle vida a tu misión </h6>
                                    <a className="button is-primary is-rounded is-large">Crea una campaña</a>
                                    <a className="button is-primary is-text is-large is-inverted" style={{ textDecoration: `none` }}>
                                        <span>Saber más</span>
                                        <span className="icon">
                                            <FaLongArrowAltRight/>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Hero>
            </Layout>
        </>
)

Home.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default Home
