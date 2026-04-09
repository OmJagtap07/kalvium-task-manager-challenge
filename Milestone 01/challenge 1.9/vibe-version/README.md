# Vibe Version

This folder contains the task manager app built using a vibe coding tool.

**Tool used:** Antigravity / v0
**Time to generate:** 11 seconds
**Prompt used:** > Act as an Expert Frontend Engineer. Generate a complete, single-page Personal Task Manager application using React and Tailwind CSS. The app must STRICTLY contain only these exact features, no more, no less: 1. Add a task with a title. 2. Mark a task as complete. 3. Filter tasks by status (All, Active, Completed). UI/UX Requirements: The UI must be clean, usable, modern, and minimal. Do NOT add any extra features. Manage all state locally within the component. Output the fully functioning code so I can export it directly into my project.

**Live URL:** [Your Live URL Here]

## Notes
The tool was incredibly fast (11 seconds) and got the UI/UX requirements right on the first try without hallucinating extra features. However, it jammed the entire application into a single monolithic file (`taskManager.jsx`). While it works perfectly for a prototype, this lack of modularity makes it very brittle and hard to scale or edit for future features.