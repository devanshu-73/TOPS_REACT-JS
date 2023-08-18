import React from 'react'

function Add_categories() {
    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Basic Forms</h1>
                        <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1>
                    </div>
                </div>
                {/* /. ROW  */}
                <div className="row">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    FORM ELEMENTS
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Select Example</label>
                                        <select className="form-control">
                                            <option>One Vale</option>
                                            <option>Two Vale</option>
                                            <option>Three Vale</option>
                                            <option>Four Vale</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label>Multiple Select Example</label>
                                        <select multiple className="form-control">
                                            <option>One Vale</option>
                                            <option>Two Vale</option>
                                            <option>Three Vale</option>
                                            <option>Four Vale</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label>Checkboxes</label>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" defaultValue />Checkbox Example One
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" defaultValue />Checkbox Example Two
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" defaultValue />Checkbox Example Three
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" defaultValue />Checkbox Example Four
                                            </label>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label>Radio Button Examples</label>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />Radio Example One
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />Radio Example Two
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />Radio Example Three
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
            {/* /. PAGE WRAPPER  */}
        </div>

    )
}

export default Add_categories