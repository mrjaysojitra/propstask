import React, { Component } from 'react'

export default class Myform extends Component {

    state = {
        firstname: '',
        lastname: '',
        gamil: '',
        moabiln: '',
        address: ''
    }

    myHandle = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
      e.preventDefault()
        console.log(this.state)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>

            <h1>Form</h1>
            <label>firstname:</label>
            <input type='text' name='firstname' onChange={this.myHandle} value={this.state.firstname}></input>

            <label>lastname:</label>
            <input type='text' name='lastname' onChange={this.myHandle} value={this.state.lastname}></input>

            <label>gmail:</label>
            <input type='email' name='gamil' onChange={this.myHandle} value={this.state.gamil}></input>

            <label>moabil:</label>
            <input type='number' name='moabiln' onChange={this.myHandle} value={this.state.moabiln}></input>

            <label>address:</label>
            <input type='text' name='address' onChange={this.myHandle} value={this.state.address}></input>
            <input type='submit'></input>
        </form>
      </div>
    )
  }
}
