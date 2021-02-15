import React from 'react'

import '../style/Creations.css'

import curiosity from '../images/desktop/image-curiosity.jpg'
import deep from '../images/desktop/image-deep-earth.jpg'
import fisheye from '../images/desktop/image-fisheye.jpg'
import above from '../images/desktop/image-from-above.jpg'
import grid from '../images/desktop/image-grid.jpg'
import arcade from '../images/desktop/image-night-arcade.jpg'
import borealis from '../images/desktop/image-pocket-borealis.jpg'
import soccer from '../images/desktop/image-soccer-team.jpg'


const Creations = () => {
    return(
        <React.Fragment>
            <section className="creations">
                <div className="creations__title">
                    <h3>Our Creations</h3>
                    <button className="creations__btn">See all</button>
                </div>

                <h3 className="title">Our Creations</h3>
                <button className="btn">See all</button>
                
                <div className="creations__images">
                    <figure className="creations__images-grid">
                        <img src={deep} alt=""/>
                        <img src={arcade} alt=""/>
                        <img src={soccer} alt=""/>
                        <img src={grid} alt=""/>
                        <img src={above} alt=""/>
                        <img src={borealis} alt=""/>
                        <img src={curiosity} alt=""/>
                        <img src={fisheye} alt=""/>
                    </figure>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Creations
