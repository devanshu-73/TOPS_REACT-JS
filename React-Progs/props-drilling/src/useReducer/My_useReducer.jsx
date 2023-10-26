/* eslint-disable react/jsx-pascal-case */
/* eslint-disable eqeqeq */
import React, { useReducer } from 'react'
import Redu_img from './Redu_img';


function My_useReducer() {

   const objectstate = {
      name: "Rajesh nagar",
      number: 0,
      isImage: true
   }

   const myfunction = (state, dispatch) => {

      if (dispatch.type == "ChangeName") {
         return ({ ...state, name: "Akash nagar" });
      }
      if (dispatch.type == "Plus") {
         return ({ ...state, number: state.number + 1 });
      }
      if (dispatch.type == "Minus") {
         return ({ ...state, number: state.number - 1 });
      }
      if (dispatch.type == "Hide") {
         return ({ ...state, isImage: false });
      }
      if (dispatch.type == "Show") {
         return ({ ...state, isImage: true });
      }
      if (dispatch.type == "HideShow") {
         return ({ ...state, isImage: !state.isImage });
      }

   }

   const [state, dispatch] = useReducer(myfunction, objectstate)

   return (
      <div className='container mt-5'>

         <button onClick={() => dispatch({ type: "ChangeName" })}>On change</button>
         <h1>Hi my name is {state.name}</h1>

         <hr />

         <button onClick={() => dispatch({ type: 'Plus' })}>+</button>
         <h1>{state.number}</h1>
         <button onClick={() => dispatch({ type: 'Minus' })}>-</button>

         <hr />

         <button onClick={() => dispatch({ type: 'Hide' })}>Hide</button>
         <button onClick={() => dispatch({ type: 'Show' })}>Show</button>
         <button onClick={() => dispatch({ type: 'HideShow' })}>Hide/Show</button>

         {
            state.isImage ? <Redu_img /> : null
         }

      </div>
   )
}

export default My_useReducer