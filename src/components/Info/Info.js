import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './Info.css'

class Info extends Component {

    render() {
        // console.log(this.props.match)
        return(
           <main>
               <div>
                   
                   <figure className='page-dis'>
                        <img src="https://ichef.bbci.co.uk/images/ic/704xn/p0686krr.jpg" alt=""/>
                        <figcaption id='font-fun'>
                            Image of a Brown Cow, up close.
                        </figcaption>
                        <div>
                            <section className='duck-sec' >
                                <p> Where are all the <span id='cute' >Cute</span> Ducks?</p>
                                <button>Match</button>
                            </section>
                        </div>
                   </figure>
                   
               </div>
           </main>
        )
    }
}

export default withRouter(Info)