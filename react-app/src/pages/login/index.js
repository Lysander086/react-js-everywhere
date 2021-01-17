import React, { Component } from 'react'
import './login.scss'
import Header from "../../components/header"


class Login extends Component {
  render() {
    return (
        <div className="P-login">
          <Header />

          <h1>Login page</h1>
          <button onClick={() => {this.gotoHome()}}>go Home</button>
        </div>
    )
  }

  gotoHome() {
    console.log(this)
    this.props.history.push('home')
  }
}

export default Login