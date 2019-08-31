import React, { Component } from 'react'
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <main class='meat'>
                <h1>Thought</h1>
                <article>Where would we be in life <strong>without</strong> <em>thought?</em> </article>
                <ul>
                    <li>Lost?</li>
                    <li>Fount?</li>
                    <li>Nowhere at all?</li>
                </ul>
                <aside class='side-thought' >
                    <p>What else could there be out there for you?Component</p>
                    <h5>Is it all just a dream</h5>
                </aside>
            </main>
        )
    }
}
