import React from 'react'

function Manage_Order() {
    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Manage Products
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>Categories Name</th>
                                        <th>RS</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Dish-1</td>
                                        <td>50$</td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Dish-2</td>
                                        <td>52$</td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Dish-3</td>
                                        <td>540$</td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>Dish-4</td>
                                        <td>450$</td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>5</td>
                                        <td>Dish-5</td>
                                        <td>50$</td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* /. PAGE INNER  */}
        </div>

    )
}

export default Manage_Order