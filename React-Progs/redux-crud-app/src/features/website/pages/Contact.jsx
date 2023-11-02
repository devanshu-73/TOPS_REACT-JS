import React, { useState} from 'react'
import {useDispatch} from 'react-redux'

import { insert } from '../../userReducer';

function Contact() {

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        message:"",
    })

    const changehandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    }

    const dispatch=useDispatch();
    
    const submithandel=(e)=>{
        e.preventDefault();
        dispatch(insert(`http://localhost:3000/contact`,formvalue));
        setFormvalue({...formvalue,name:"",email:"",message:""});
    }

    return (
        <div>
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-8 offset-md-2">
                    <form action="">
                        <div className="mb-3 mt-3">
                            <label htmlFor="email">Name:</label>
                            <input type="text" value={formvalue.name} onChange={changehandel} className="form-control" id="Name" placeholder="Enter Name" name="name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" value={formvalue.email} onChange={changehandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="pwd">Message:</label>
                            <textarea value={formvalue.message} onChange={changehandel} className="form-control" id="message" placeholder="Enter message" name="message" ></textarea>
                        </div>
                       
                        <button type="submit"  onClick={submithandel} className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    </div>

    )
}

export default Contact