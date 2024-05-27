import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');
  const [error, setError] = useState('');

  // Load tasks from localStorage when component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task after validating the input
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: uuidv4(), text: task, completed: false, date: new Date() }]);
      setTask('');
      setError('');
    } else {
      setError('Task cannot be empty.');
    }
  };

  // Remove a task by its id
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle the completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Sort tasks by date or alphabetically
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sort === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    if (sort === 'alphabetically') {
      return a.text.localeCompare(b.text);
    }
    return 0;
  });

  // Filter tasks based on the selected filter
  const filteredTasks = sortedTasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="controls-container">
        <div className="filter-container">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
        <div className="sort-container">
          <label>Sort by: </label>
          <select value={sort} onChange={handleSortChange}>
            <option value="date">Date</option>
            <option value="alphabetically">Alphabetically</option>
          </select>
        </div>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
