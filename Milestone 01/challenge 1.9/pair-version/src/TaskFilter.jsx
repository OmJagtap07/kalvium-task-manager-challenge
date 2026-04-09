import React from 'react';

const filters = ['All', 'Active', 'Completed'];

const TaskFilter = ({ currentFilter, setFilter }) => {
	return (
		<div className="flex flex-wrap gap-2">
			{filters.map((option) => {
				const isSelected = option === currentFilter;

				return (
					<button
						key={option}
						type="button"
						onClick={() => setFilter(option)}
						className={`rounded-full px-4 py-2 text-sm font-medium transition ${
							isSelected
								? 'bg-slate-900 text-white'
								: 'bg-slate-200 text-slate-700 hover:bg-slate-300'
						}`}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
};

export default TaskFilter;
