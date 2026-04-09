import { useState } from "react";

const FILTERS = ["All", "Active", "Completed"];

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("All");

    const addTask = (e) => {
        e.preventDefault();
        const title = input.trim();
        if (!title) return;
        setTasks((prev) => [
            { id: Date.now(), title, completed: false },
            ...prev,
        ]);
        setInput("");
    };

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    const visibleTasks = tasks.filter((t) => {
        if (filter === "Active") return !t.completed;
        if (filter === "Completed") return t.completed;
        return true;
    });

    return (
        <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                {/* Header */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    My Tasks
                </h1>

                {/* Add Task Form */}
                <form onSubmit={addTask} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a new task…"
                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-colors disabled:opacity-40"
                        disabled={!input.trim()}
                    >
                        Add
                    </button>
                </form>

                {/* Filter Tabs */}
                <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`flex-1 py-1.5 text-sm font-medium rounded-lg transition-colors ${filter === f
                                ? "bg-white text-indigo-600 shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Task List */}
                <ul className="space-y-2">
                    {visibleTasks.length === 0 ? (
                        <li className="text-center text-sm text-gray-400 py-10">
                            {filter === "Completed"
                                ? "No completed tasks yet."
                                : filter === "Active"
                                    ? "No active tasks. Great job!"
                                    : "No tasks yet. Add one above!"}
                        </li>
                    ) : (
                        visibleTasks.map((task) => (
                            <li
                                key={task.id}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors group"
                            >
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                    className="w-4 h-4 accent-indigo-500 cursor-pointer flex-shrink-0"
                                />
                                <span
                                    className={`text-sm flex-1 ${task.completed
                                        ? "line-through text-gray-400"
                                        : "text-gray-700"
                                        }`}
                                >
                                    {task.title}
                                </span>
                            </li>
                        ))
                    )}
                </ul>

                {/* Footer Count */}
                {tasks.length > 0 && (
                    <p className="text-xs text-gray-400 text-center mt-4">
                        {tasks.filter((t) => !t.completed).length} task
                        {tasks.filter((t) => !t.completed).length !== 1 ? "s" : ""} left
                    </p>
                )}
            </div>
        </div>
    );
}
