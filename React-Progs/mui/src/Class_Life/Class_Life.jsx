/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Class_Img from './Class_Img';

export default class Class_Life extends Component {
    constructor() {
        super();
        this.state = {
            name: "Raj nagar",
            isImage: true
        }
    }

    componentDidUpdate() {

        console.log('Component DidUpdate');
    }
    render() {
        return (
            <div className='container mt-5'>
                <button onClick={() => this.setState({ isImage: false })}>Hide</button>
                <button onClick={() => this.setState({ isImage: true })}>Show</button>
                {
                    this.state.isImage ? <Class_Img /> : null
                }
            </div>
        )
    }
}
