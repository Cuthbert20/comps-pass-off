import React, { Component } from 'react'
import './Info.css'

export default class Info extends Component {
    render() {
        return(
           <main>
               <div>
                   
                   <figure class='page-dis'>
                        <img src="https://ichef.bbci.co.uk/images/ic/704xn/p0686krr.jpg" alt=""/>
                        <figcaption id='font-fun'>
                            Image of a Brown Cow, up close.
                        </figcaption>
                        <div>
                            <section class='duck-sec' >
                                <p> Where are all the <span id='cute' >Cute</span> Ducks?</p>
                            </section>
                        </div>
                   </figure>
                   
               </div>
           </main>
        )
    }
}