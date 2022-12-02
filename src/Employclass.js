import React, { Component } from 'react'

export default class Employclass extends Component {
  render() {
    return (
      <table><tr>
        <td>{this.props.datas.id}</td>
        <td>{this.props.datas.title}</td>
        <td><img src={this.props.datas.url}></img></td>
        <td><img src={this.props.datas.thumbnailUrl}></img></td>
      </tr>
      </table>
    )
  }
}
