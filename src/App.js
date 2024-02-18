import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  let [toDos, setToDos] = useState([]);
  let [toDo, setToDo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>

      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { ID: Date.now(), text: toDo, activeStatus: false, cancelStatus: false }])} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {toDos.map((obj, index) => {
          if (obj.activeStatus === false && obj.cancelStatus === false) {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    setToDos(toDos.filter((obj2) => {
                      if (obj2.ID === obj.ID) {
                        obj2.activeStatus = e.target.checked;
                      }
                      return obj2;
                    }))
                  }} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.ID === obj.ID) {
                          obj2.cancelStatus = true;
                        }
                        return obj2;
                      })
                    )
                  }} className="fas fa-times"></i>
                </div>
              </div>
            )
          }
          return null;
        })}

      </div>
      <div className="subHeading">
        <br />
        <h2>Completed</h2>

      </div>
      <div className='todos'>
        {toDos.map((obj) => {
          if (obj.activeStatus === true) {
            return (
              <div className='todo'>{obj.text}</div>
            )
          }
          return null;
        })}
      </div>

      <div className="subHeading">
        <br />
        <h2>Cancelled</h2>

      </div>
      <div className='todos'>
        {toDos.map((obj) => {
          if (obj.cancelStatus === true) {
            return (
              <div className='todo'>{obj.text}</div>
            )
          }
          return null;
        })}
      </div>



    </div>
  );
}

export default App;