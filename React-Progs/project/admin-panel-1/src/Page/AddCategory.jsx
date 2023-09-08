import React from 'react'

function AddCategory() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Hotel-Room</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add Hotel-Room
                                </div>
                                <div className="panel-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Hotel-Type</label>
                                            <select className="form-control">
                                            <option disabled selected> -- Select -- </option>
                                            <option>Junior Suite Room</option>
                                            <option>Executive Suite Room</option>
                                            <option>Super Deluxe Room</option>
                                        </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>About</label>
                                            <textarea className="form-control" rows={3} defaultValue={""} />
                                        </div>
                                        <button type="submit" className="btn btn-info">Add Cake</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE-INNER  */}
            </div>
        </div>
    )
}

export default AddCategory