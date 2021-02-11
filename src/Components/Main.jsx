import React from 'react'
import About from './About'
import Creations from './Creations'

import '../style/Main.css'

const Main = () => {
    return(
        <React.Fragment>
            <div className="content">
                <About/>
                <Creations/>
            </div>        
                {/* <section className="creations">
                <h3>Our creations</h3>
                <button>See all</button>
                <div>imagen</div>
                <div>imagen</div>
                <div>imagen</div>
                <div>imagen</div>
                <div>imagen</div>
                <div>imagen</div>
                <div>imagen</div>
                <div>imagen</div>
                </section>
             */}
        </React.Fragment>
    )
}

export default Main