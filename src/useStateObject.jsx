// when you want to update a single variable in object we used spread operator---

import React, { useState } from 'react'

const UseStateObject = () => {
  const [myObject,setMyObject]=useState({
    myName:"Rita sah",myAge:27,degree:"MCS"
  });

  const changeObject =() =>{
     setMyObject({...myObject,myName:"church"})
  }

  return (
    <div>
      <h1 className="h1style">Name:{myObject.myName} & Age:{myObject.myAge} & Degree: {myObject.degree}</h1>
      <button className="btn" onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject