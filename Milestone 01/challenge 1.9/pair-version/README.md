# Pair Version

This folder contains the task manager app built using an AI pair programming assistant.

**Tool used:** GitHub Copilot
**Time to build:** 18 minutes
**Suggestions accepted:** 15
**Suggestions rejected:**  4
**Live URL:** storied-zabaione-b3de75.netlify.app


## Notes
By acting as the driver, I was able to enforce a strict, modular React architecture (`App.jsx`, `TaskInput.jsx`, `TaskList.jsx`, `TaskItem.jsx`, `TaskFilter.jsx`) instead of a single massive file. I guided the AI by writing specific architectural comments at the top of each file. I had to reject a few suggestions where the AI tried to overcomplicate the state management or add unnecessary database connections, but overall, it drastically sped up typing out the boilerplate while letting me keep total control of the engineering logic.