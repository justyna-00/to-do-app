import React, {Component} from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import './App.css'

class ToDo extends Component {
  counter = 9;
  state = { 
    tasks: [
      {id: 0, text: 'Zrobić projekt do pracy', date: '12.01.2023', important: true, active: true, finishDate: null},
      {id: 1, text: 'Umyć okna', date: '05.01.2023', important: false, active: true, finishDate: null},
      {id: 2, text: 'Schudnąć 4 kilogramy', date: '31.01.2023', important: false, active: true, finishDate: null},
      {id: 3, text: 'Przedłużyć karnet na siłowni', date: '01.02.2023', important: false, active: true, finishDate: null},
      {id: 4, text: 'Zrobić zakupy', date: '07.01.2023', important: false, active: true, finishDate: null},
      {id: 5, text: 'Umówić się do fryzjera', date: '05.02.2023', important: false, active: true, finishDate: null},
      {id: 6, text: 'Anulować subskrypcję na HBO', date: '31.01.2023', important: true, active: true, finishDate: null},
      {id: 7, text: 'Umówić się na badania', date: '15.01.2023', important: true, active: true, finishDate: null},
      {id: 8, text: 'Umówić się z Jolą na kawę', date: '21.01.2023', important: false, active: true, finishDate: null},
    ]
   } 

   changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
   }

   deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    })
   }
   backTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = true;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
   }

   addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
   }

  render() { 
    return (
      <div className='App'>
      <h1>to do app</h1>
      <AddTask add={this.addTask}/>
      <TaskList 
      tasks={this.state.tasks} 
      change={this.changeTaskStatus}   
      delete={this.deleteTask} 
      back={this.backTaskStatus}/>
      </div>
    );
  }
}
 
export default ToDo;