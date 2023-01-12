import React, { Component } from 'react'
import Classcom2 from './Classcom2';

export default class Classcom extends Component {

    constructor() {
        super();
        this.state = {
           
            array: [],
            textname: ""
           
        } }

        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value});
        }
    

        mySubmit = (e) => {
            e.preventDefault()

            let stor = [...this.state.array];
            stor.push(this.state.textname);
            
            this.setState({...this.state, "array": stor})
           
        }
    
  render() {
    return (
      <div>
      
        <input type='text' name='textname' onChange={this.handleChange}></input>
        <input onClick={this.mySubmit} type="submit" value='submit'></input>
        {this.state.array}
        <Classcom2 />
      </div>
    )
  }
}
