import React from 'react'
import '../../styles/styles.scss'

const Hero = ({ children }) => (
    <section className="hero is-white has-text-centered">
        {children}
    </section>
)

export default Hero
