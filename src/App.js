import { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

import InputData from './components/InputData'
import TaskList from './components/TaskList'
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([])
    const [tasksRemaining, setTasksRemaining] = useState(0)

    useEffect(() => {
        setTasksRemaining(tasks.filter((task) => !task.completed).length)
    }, [tasks])

    const addTask = (title, role) => {
        const newTasks = [...tasks, { title, role, completed: false }]
        setTasks(newTasks)
    }

    const completeTask = (index) => {
        const newTasks = [...tasks]
        newTasks[index].completed = true
        setTasks(newTasks)
    }

    const removeTask = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    return (
        <Container>
            <InputData addTask={addTask} />

            <TaskList
                tasks={tasks}
                removeTask={removeTask}
                completeTask={completeTask}
                tasksRemaining={tasksRemaining}
            />
        </Container>
    )
}

export default App
