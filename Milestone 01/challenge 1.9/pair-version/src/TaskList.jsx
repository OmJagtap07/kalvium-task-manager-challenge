import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTask }) => {
	if (tasks.length === 0) {
		return (
			<div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500">
				No tasks to show.
			</div>
		);
	}

	return (
		<ul className="space-y-3">
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} onToggle={onToggleTask} />
			))}
		</ul>
	);
};

export default TaskList;
