import React from 'react'

function AddProduct() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Cake</h1>
                        </div>
                    </div>
                    {/*/.ROW*/}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Hotel Room
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Hotel Type</label>
                                        <select className="form-control">
                                        <option disabled selected> -- Select -- </option>
                                            <option>Junior Suite Room</option>
                                            <option>Executive Suite Room</option>
                                            <option>Super Deluxe Room</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label>Price</label>
                                        <select className="form-control">
                                            <option disabled selected> -- Select -- </option>
                                            <option>Rs. 2000</option>
                                            <option>Rs. 4000</option>
                                            <option>Rs. 7000</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <button type="submit" className="btn btn-info">Add Room</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>
    )
}

export default AddProduct