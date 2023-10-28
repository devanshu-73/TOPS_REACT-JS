import React from 'react';

function Contact() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <form action="">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Name:</label>
                                <input type="text" className="form-control" id="Name" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="pwd">Message:</label>
                                <textarea className="form-control" id="message" placeholder="Enter message" name="message" ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;