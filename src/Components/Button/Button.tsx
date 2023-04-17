import React, { useEffect, useState } from 'react'
interface ButtonProps {
    text:string,
    color:string,
    index:number,
    handleClick :(index:number) => void
}
function Button({text,color,index,handleClick}:ButtonProps) {
    useEffect(()=>{
        console.log('render from ',text);
        
    },[text,color])
  return (
    <button type='button' onClick={()=>handleClick(index)} style ={{background:color}}>{text}</button>
  )
}

export default Button