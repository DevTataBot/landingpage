import React from 'react'
import interactive from '../images/desktop/image-interactive.jpg'

import '../style/About.css'

const About = () => {
    return(
        <React.Fragment>
            <section className="about">
                <figure className="about__figure">
                    <img src={interactive} alt="Imagen"/>
                </figure>
                <div className="about__description">
                    <h3>The leader in interactive VR</h3>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                        projects for some of the best companies around the globe. Our award-winning 
                        creations have transformed businesses through digital experiences that bind 
                        to their brand.
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About
