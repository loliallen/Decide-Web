import React, { Component } from 'react'
import ApiService from '../services/ApiService'

export default class App extends Component {

    state = {
        users: [],
        isLoaded: false
    }

    componentDidMount() {
        ApiService.User.getUsers()
            .then(res => this.setState({ isLoaded: true, users: res }))
            .catch(e => console.log(e.message))
  }

    render() {
        const { isLoaded, users } = this.state
        return (
            <div>
                <h2>User List</h2>
                <ul>
                    {isLoaded && users.map(user => {
                        return <li>
                            <div>{user.name}</div>
                            <div>{user.age}</div>
                            <div>{user.livingCity}</div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
