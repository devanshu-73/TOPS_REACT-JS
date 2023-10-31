/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userfetch, deletedata } from './../../userReducer';

function Manage_data() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userfetch());
    }, [])

    const { alluser } = useSelector((state) => state.userReducer)

    const deletehandel = (id) => {
        dispatch(deletedata(`http://localhost:3000/user/${id}`));
        dispatch(userfetch());
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
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                                <th>Mobile</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                alluser.map((value) => {
                                                    return (
                                                        <tr>
                                                            <th>{value.id}</th>
                                                            <th>{value.name}</th>
                                                            <th>{value.email}</th>
                                                            <th>{value.password}</th>
                                                            <th>{value.mobile}</th>
                                                            <th>
                                                                <button className='btn btn-danger'>Edit</button>
                                                                <button className='btn btn-primary' onClick={() => deletehandel(value.id)}>Delete</button>
                                                            </th>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>{/* /content-panel */}
                            </div>{/* /col-md-12 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_data