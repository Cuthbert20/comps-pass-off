import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <button className='nav-btn' ><i class="fas fa-cocktail"></i></button>
            <Link to='/info'><button className='nav-btn' ><i class="fad fa-carrot"></i></button></Link>
            <aside>
            <h1>Info you Should Know in Life</h1>
                    <h5>lets Start with a quote</h5>
                    <blockquote>"To be or not to be, that is the question."</blockquote>
                    <tt>Hamlet is basically contemplating suicide on and off throughout his soliloquies. In this soliloquy, he compares death to a little sleep, which he thinks wouldn't be so bad. ... But then Hamlet wonders if it's better to put up with the bad things you know about in life than to run off into death's "undiscovered country."</tt>

            </aside>
        </nav>
    )
}
