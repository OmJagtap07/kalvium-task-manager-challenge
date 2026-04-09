import { useState } from 'react'
import TaskInput from './TaskInput'
import TaskFilter from './TaskFilter'
import TaskList from './TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  const handleAddTask = (title) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title, completed: false },
    ])
  }

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-slate-900">My Tasks</h1>

        {/* Add Task */}
        <TaskInput onAddTask={handleAddTask} />

        {/* Filter Tabs */}
        <TaskFilter currentFilter={filter} setFilter={setFilter} />

        {/* Task List */}
        <TaskList tasks={visibleTasks} onToggleTask={handleToggleTask} />

        {/* Footer count */}
        {tasks.length > 0 && (
          <p className="text-xs text-slate-400 text-center">
            {tasks.filter((t) => !t.completed).length} task
            {tasks.filter((t) => !t.completed).length !== 1 ? 's' : ''} remaining
          </p>
        )}
      </div>
    </div>
  )
}

export default App
