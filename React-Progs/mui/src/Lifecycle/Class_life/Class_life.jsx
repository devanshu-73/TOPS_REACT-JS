import React, { Component } from 'react'
import Life_img from './Life_img';

export class Class_life extends Component {

    constructor()
    {
        super();
        this.state={
            name:"Raj nagar",
            isImage:true
        }
    }

    componentDidUpdate(){
        
        console.log('Component DidUpdate');
    }

  render() {
    return (
      <div className='container mt-5'>
        <button onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button onClick={()=>this.setState({isImage:true})}>Show</button>
        {
            this.state.isImage? <Life_img/> : null
        }
      </div>
    )
  }
}

export default Class_life