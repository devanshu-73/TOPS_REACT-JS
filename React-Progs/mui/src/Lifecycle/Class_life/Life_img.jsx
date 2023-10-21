import React, { Component } from 'react'

export class Life_img extends Component {

componentDidMount() {
    
    console.log('Component didMount');    
}

componentWillUnmount() {
    
    console.log('Component WillUnmount');    
}


  render() {
    return (
      <div>
        <h1>Hi i m img comp</h1>
      </div>
    )
  }
}

export default Life_img