/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletedata, updatedata } from '../../userReducer'
import { fetchcontact, fetchsinglecontact } from '../../contactReducer'

function Manage_contact() {
    const { allcontact, singlecontact } = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch();

    // Initialize the formvalue state with an empty object
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        message: "",
    });

    // Update the formvalue state when singlecontact changes
    useEffect(() => {
        dispatch(fetchcontact());
        if (singlecontact) {
            setFormvalue(singlecontact);
        }
    }, [singlecontact]);

    const edithandel = (id) => {
        dispatch(fetchsinglecontact(id));
    }

    const changehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const submithandel = (e) => {
        e.preventDefault();
        dispatch(updatedata(`http://localhost:3000/contact/${formvalue.id}`, formvalue));
        dispatch(fetchcontact());
    }

    const deletehandel = (id) => {
        dispatch(deletedata(`http://localhost:3000/contact/${id}`));
        dispatch(fetchcontact());
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <div className="row mt">
                            <div className="col-md-12">
                                <div className="content-panel">
                                    <h4><i className="fa fa-angle-right" /> Manage User</h4><hr /><table className="table table-striped table-advance table-hover">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th> Name</th>
                                                <th> Email</th>
                                                <th> Message</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allcontact.map((value) => {
                                                    return (
                                                        <tr>
                                                            <th>{value.id}</th>
                                                            <th>{value.name}</th>
                                                            <th>{value.email}</th>
                                                            <th>{value.message}</th>
                                                            <th>
                                                                <button className='btn btn-danger' onClick={() => deletehandel(value.id)}>Delete</button>
                                                                <button className='btn btn-primary' onClick={() => edithandel(value.id)} data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>
                                                            </th>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <div className="modal" id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* Modal Header */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Modal Heading</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                </div>
                                                {/* Modal body */}
                                                <div className="modal-body">
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
                                                                    <textarea value={formvalue.message} onChange={changehandel} className="form-control" name="message" ></textarea>
                                                                </div>


                                                                <button type="submit" onClick={submithandel} data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Modal footer */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* /content-panel */}
                            </div>{/* /col-md-12 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_contact;



