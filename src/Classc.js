import axios from 'axios'
import React, { Component } from 'react'
import Employclass from './Employclass'

export default class Classc extends Component {
    state = {
        record : []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(y => {
            this.setState({record: y.data})
        })
    }
  render() {
    return (
      <div>
        {this.state.record.map((e)=> {
            return(<Employclass datas={e}></Employclass> )
        })}
      </div>
    )
  }
}
