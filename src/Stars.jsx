import React from 'react'

export const Stars=()=> {
    const HandleClick=(id)=>{
        for(let i=1; i<=5; i++){
            if(i>id){
                document.getElementById(`${i}`).style.color='blue'
            }
            if(i===id){
                document.getElementById(`${i}`).style.color = 'red'
            }
            if(i<id){
                document.getElementById(`${i}`).style.color = 'green'
            }
        }
    }
  return (
    <div>
        <h1 id='1' onClick={()=>HandleClick(1)} >*</h1>
        <h1 id='2' onClick={()=>HandleClick(2)}>*</h1>
        <h1 id='3' onClick={()=>HandleClick(3)}>*</h1>
        <h1 id='4' onClick={()=>HandleClick(4)}>*</h1>
        <h1 id='5' onClick={()=>HandleClick(5)}>*</h1>
    </div>
  )
}
