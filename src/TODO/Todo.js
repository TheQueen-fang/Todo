import React, { useState } from 'react'
import './todo.css';

export default function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData, activity]);
    setlistData((listData) => {
      const updateList = [...listData, activity];
      setActivity('');
      console.log(updateList);
      return updateList;
    })
   
  }
  function removeActiviy(i) {
    const updateItems = listData.filter((elem, id) => {
      return i !== id;
    })
    setlistData(updateItems);
                
  }
  
  
  return (
    
      <>
          
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input className='input' type='text' placeholder='Add Activity' value={activity} onChange={(e) => {
          setActivity(e.target.value);
          
        }} />
        <button onClick={addActivity}> Add</button>
        <p className='List-heading'>Here is Your list :{")"}</p>
        {listData !== [] && listData.map((data, i) => {
          return (
            <p key={i}>
              <div className='listData'>{data}</div>
              <div className='btn-position'><button onClick={()=>removeActiviy(i)}>remove(-)</button></div>
              
             
            </p>
          )
        })}
        
          </div>
      </>
  )
}
