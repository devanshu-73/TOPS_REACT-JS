/* eslint-disable default-case */
import axios from "axios";

const ALLCONTACT = "ALLCONTACT";
const SINGLECONTACT = "SINGLECONTACT";

const objectinia = {
    allcontact: [],
    singlecontact: {}
}

const contactReducer = (state = objectinia, action) => {

    switch (action.type) {
        case "ALLCONTACT":
            return {
                ...state,
                allcontact: action.payload
            }
        case "SINGLECONTACT":
            return {
                ...state,
                singlecontact: action.payload
            }
            
    }
    return state;
}

export default contactReducer;



const getcontact = (data) => ({
    type: ALLCONTACT,
    payload: data
})

export const fetchcontact = () => {
    return function (dispatch) {
        axios.get('http://localhost:3000/contact')
            .then((resp) => {
                dispatch(getcontact(resp.data))
            })
    }
}

const getsinglecontact = (data) => ({
    type: SINGLECONTACT,
    payload: data
})

export const fetchsinglecontact = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3000/contact/${id}`)
            .then((resp) => {
                dispatch(getsinglecontact(resp.data))
            })
    }
}