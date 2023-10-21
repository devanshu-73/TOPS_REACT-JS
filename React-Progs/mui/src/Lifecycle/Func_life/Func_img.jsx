import React,{useEffect} from 'react'

function Func_img() {

  useEffect(()=>{
    console.log('Comp didMount'); // didMount

    return(()=>{console.log('Comp didUnmount')}); // didUnmount})

  },[]);
  
  
  return (
    <div>
        <h1>Hi i am func compo</h1>
    </div>
  )
}

export default Func_img