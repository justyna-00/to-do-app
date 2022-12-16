import React from 'react';

import './Task.css'

const Task = (props) => {

const importantStyle = {
  color: '#FF0000',
}

const {text, date, id, active, important, finishDate} = props.task

  if(active) {
    return ( 
    <div className='activeTask'>
    <p>
      <strong style={important ? importantStyle : null}>
        {text}
      </strong> - do <span>{date} </span>
      <br />
      <button onClick={() => props.change(id)}>Zrobione</button>
      <button onClick={() => props.delete(id)}>X</button>
    </p>
    
    </div>
   );
  } else {

    const finish = new Date(finishDate).toLocaleDateString();

    return (
      <div className='doneTask'>
        <p>
          <strong>{text}</strong><em> (zrobić do {date})</em>
        </p>
        <p> - zadanie wykonane <span>{finish} </span>
        <button onClick={()=>props.back(id)}>Cofnij</button>
        <button onClick={() => props.delete(id)}>X</button>
        </p>

      </div>
    )
  }

  
}
 
export default Task;