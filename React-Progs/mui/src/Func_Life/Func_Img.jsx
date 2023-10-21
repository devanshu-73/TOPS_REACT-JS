import React, { useEffect } from 'react'

const Func_Img = () => {

  useEffect(() => {
    console.log('Comp didMount'); // didMount

    return (() => { console.log('Comp didUnmount') }); // didUnmount})

  }, []);
  
  return (
    <div>
      <h1>Hi I Am Func Comp</h1>
    </div>
  )
}

export default Func_Img
