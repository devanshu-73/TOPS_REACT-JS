import React from 'react'

function Manage_data() {

   

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
                                                <th> Mobile</th>

                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
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