/* eslint-disable default-case */
import axios from 'axios';

const ALLDATA = "ALLDATA";

const objectinia = {
    alluser: [],
    singleuser: {},
    demo: "Devanshu"
}

const userReducer = (state = objectinia, action) => {

    switch (action.type) {
        case 'ALLDATA':
            return {
                ...state,
                alluser: action.payload
            }
    }
    return state;
}

const getdata = (data) => ({ type: ALLDATA, payload: data });

export const userfetch = () => {
    return function (dispatch) {
        axios.get(`http://localhost:3000/user`)
            .then((resp) => {
                dispatch(getdata(resp.data));
            })
    }
}

export const insert = (api, object) => {
    return function () {
        axios.post(api, object)
            .then((resp) => console.log(resp))
    }
}

export const deletedata = (api) => {
    return function () {
        axios.delete(api)
            .then((resp) => console.log(resp))
    }
}


export default userReducer;