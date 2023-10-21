import React, { Component } from 'react'

export default class Class_Img extends Component {
    componentDidMount() {
    
        console.log('Component didMount');    
    }
    
    componentWillUnmount() {
        
        console.log('Component WillUnmount');    
    }
  render() {
    return (
      <div>
        <h1>Hello I Am Component</h1>
      </div>
    )
  }
}
