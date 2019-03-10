import React from 'react'
import '../../styles/styles.scss'

const Hero = ({ children, className }) => (
    <section className={`hero is-white ${className}`}>
        {children}
    </section>
)

export default Hero
