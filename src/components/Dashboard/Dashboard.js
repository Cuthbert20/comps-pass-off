import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import UserInfo from '../UserInfo/UserInfo'


 class Dashboard extends Component {
    state = {
        username: '',
        user_password: '',
        user: []
    }
    login = () => {
        const { username, user_password } = this.state 
        axios.post('/auth/login', { username, user_password })
        .then(res => {
            this.setState({
                user: res.data
            })
        })
    }
    handleChange = (elm, key) =>{
        this.setState({
            [key]: elm.target.value
        })
    }
    render() {
        // console.log(this.state.user)
        // console.log('props', this.props)
        const { username, user_password, } = this.state
        // let mappedUser = this.state.user.map(elm => {
        //     return (
        //         <div key={elm.user_id} >
        //             <h1>{elm.username}</h1>
        //         </div>
        //     )
        // })
        return (
            <main className='meat'>
                <UserInfo />
                <input placeholder='name' onChange={e => this.handleChange(e, 'username')} value={username} type="text"/>
                <input placeholder='password' onChange={e => this.handleChange(e, 'user_password')} value={user_password} type="text"/>
                <button onClick={this.login} >login</button>
                <h1>Thought</h1>
                <article>Where would we be in life <strong>without</strong> <em>thought?</em> </article>
                <ul>
                    <li>Lost?</li>
                    <li>Fount?</li>
                    <li>Nowhere at all?</li>
                </ul>
                <aside className='side-thought' >
                    <p>What else could there be out there for you?Component</p>
                    <h5>Is it all just a dream</h5>
                </aside>
                <div>
                    <h2>DevMtn is the best</h2>
                    <img src="http://localhost:4949/static/dog-bath.jpg" alt=""/>
                </div>
            </main>
        )
    }
}

export default withRouter(Dashboard)
