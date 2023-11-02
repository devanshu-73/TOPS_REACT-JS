/* eslint-disable dot-location */
/* eslint-disable default-case */

import axios from 'axios'

const ALLDATA = "ALLDATA";
const SINGLEDATA = "SINGLEDATA";

const objectinia = {
    alluser: [],
    singleuser: {},
    demo: "Raj nagar"
}

const userReducer = (state = objectinia, action) => {

    switch (action.type) {

        case 'ALLDATA':
            return {
                ...state,
                alluser: action.payload
            }

        case 'SINGLEDATA':
            return {
                ...state,
                singleuser: action.payload
            }


    }

    return state;
}

export default userReducer;


const getdata = (data) => ({ type: ALLDATA, payload: data })

export const userfetch = () => {
    return function (dispatch) {
        axios.get('http://localhost:3000/user')
            .then((resp) => {
                dispatch(getdata(resp.data));
            })
    }
}


const getsingledata = (data) => ({ type: SINGLEDATA, payload: data })

export const usersinglefetch = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3000/user/${id}`)
            .then((resp) => {
                dispatch(getsingledata(resp.data));
            })
    }
}

export const insert = (api, object) => {
    return function () {
        axios.post(api, object).
            then((resp) => console.log(resp));
    }
}

export const deletedata = (api) => {
    return function () {
        axios.delete(api).
            then((resp) => console.log(resp));
    }
}

export const updatedata = (api, object) => {
    return function () {
        axios.patch(api, object).
            then((resp) => console.log(resp));
    }
}