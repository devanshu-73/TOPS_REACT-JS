/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { toast } from 'react-toastify';

// important Library... for dynamic date...
// npm install react-datepicker date-fns

export default function Booking() {
    const [data, setData] = useState({
        name: "",
        email: "",
        checkInDate: null,
        checkOutDate: null,
        numberOfAdults: 0,
        numberOfChildren: 0,
        selectedRoom: "",
    });

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    function validation() {
        var result = true;
        if (data.name === "") {
            toast.error('Name Field is required!');
            result = false;
        }
        if (data.email === "") {
            toast.error('Email Field is required!');
            result = false;
        }
        return result;
    }

    const handleCheckInDateChange = (date) => {
        setData({ ...data, checkInDate: date });
    };

    const handleCheckOutDateChange = (date) => {
        setData({ ...data, checkOutDate: date });
    };

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            try {
                // Convert the checkInDate and checkOutDate to UTC before sending
                const checkInDateUTC = data.checkInDate.toISOString();
                const checkOutDateUTC = data.checkOutDate.toISOString();

                const res = await axios.post(`https://devsite-hotel-default-rtdb.asia-southeast1.firebasedatabase.app/order.json`, {
                    name: data.name,
                    email: data.email,
                    checkInDate: checkInDateUTC,
                    checkOutDate: checkOutDateUTC,
                    numberOfAdults: data.numberOfAdults,
                    numberOfChildren: data.numberOfChildren,
                    selectedRoom: data.selectedRoom,
                });

                if (res.status === 201) {
                    toast.success('Booking Successful!');
                    setData({
                        name: "",
                        email: "",
                        checkInDate: null,
                        checkOutDate: null,
                        numberOfAdults: 0,
                        numberOfChildren: 0,
                        selectedRoom: "",
                    });
                }
            } catch (error) {
                console.error("Error submitting the form:", error);
                toast.error('Booking failed. Please try again later.');
            }
        }
    };


    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="bg-white shadow" style={{ padding: 35 }}>
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-3">
                                        <div className="date" id="date1" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="date" id="date2" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option selected>Adult</option>
                                            <option value={1}>Adult 1</option>
                                            <option value={2}>Adult 2</option>
                                            <option value={3}>Adult 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option selected>Child</option>
                                            <option value={1}>Child 1</option>
                                            <option value={2}>Child 2</option>
                                            <option value={3}>Child 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary w-100">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Booking Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">Room Booking</h6>
                        <h1 className="mb-5">Book A <span className="text-primary text-uppercase">Luxury Room</span></h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" style={{ marginTop: '25%' }} />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" name='name' id="name" onChange={onchange} placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" name='email' id="email" onChange={onchange} placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="date" id="date1" data-target-input="nearest">
                                                <DatePicker
                                                    selected={data.checkInDate}
                                                    onChange={handleCheckInDateChange}
                                                    showTimeSelect
                                                    placeholderText="Check in"
                                                    className="form-control"
                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                    utcOffset={0}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                <DatePicker
                                                    selected={data.checkOutDate}
                                                    onChange={handleCheckOutDateChange}
                                                    showTimeSelect
                                                    placeholderText="Check out"
                                                    className="form-control"
                                                    dateFormat="MMMM d, yyyy h:mm aa"
                                                    utcOffset={0}
                                                />
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" id="select1"
                                                    name="numberOfAdults"
                                                    value={data.numberOfAdults}
                                                    onChange={onchange}
                                                >
                                                    <option value={0} selected disabled >Selected</option>
                                                    <option value={1}>Adult 1</option>
                                                    <option value={2}>Adult 2</option>
                                                    <option value={3}>Adult 3</option>
                                                </select>
                                                <label htmlFor="select1">Select Adult</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" id="select2"
                                                    name="numberOfChildren" // Make sure 'name' attribute matches the state property
                                                    value={data.numberOfChildren} // Bind the input value to the state
                                                    onChange={onchange} // Wire up the onChange event handler
                                                >
                                                    <option value={0} selected disabled>Selected</option>
                                                    <option value={1}>Child 1</option>
                                                    <option value={2}>Child 2</option>
                                                    <option value={3}>Child 3</option>
                                                </select>
                                                <label htmlFor="select2">Select Child</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <select className="form-select" id="select3"
                                                    name="selectedRoom" // Make sure 'name' attribute matches the state property
                                                    value={data.selectedRoom} // Bind the input value to the state
                                                    onChange={onchange} // Wire up the onChange event handler
                                                >
                                                    <option value="" disabled selected>Selected</option>
                                                    <option value="Junior Suite Room">Junior Suite Room</option>
                                                    <option value="Executive Suite Room">Executive Suite Room</option>
                                                    <option value="Super Deluxe Room">Super Deluxe Room</option>
                                                </select>
                                                <label htmlFor="select3">Select A Room</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" onClick={onsubmit} type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking-End */}

        </>
    );
}
