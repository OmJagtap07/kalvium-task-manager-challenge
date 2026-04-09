import React from 'react';

const TaskItem = ({ task, onToggle }) => {
	return (
		<li className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => onToggle(task.id)}
				className="h-4 w-4 accent-slate-900"
			/>
			<span className={task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}>
				{task.title}
			</span>
		</li>
	);
};

export default TaskItem;
