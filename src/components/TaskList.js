import React from 'react';
import Task from './Task'

import './TaskList.css'

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  if(active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if(a < b) return -1;
      if(a > b) return 1;
      return 0

    })
  }

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) return 1;
      if (a.finishDate > b.finishDate) return -1;
      return 0
    })
  }

  const activeTasks = active.map(task => <Task key={task.id} task= 
  {task} change={props.change} delete={props.delete}/>)
  const doneTasks = done.map(task => <Task key={task.id} task= 
  {task} change={props.change} delete={props.delete} back={props.back}/>)

  return (  
    <>
    <div className="active">
      <h2>Zadania do zrobienia</h2>
      {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do 
      wykonania</p>}
    </div>
   <div className="done">
    <h2>Zadania zrobione <em>({done.length})</em></h2>
    {done.length>5 && <span className='info'>wyświetlone jest pięć ostatnich zadań</span>}
    {doneTasks.slice(0,5)}
   </div>
    </>
  );
}
 
export default TaskList;
