# Vibe vs. Pair Challenge
Ready for evaluation.

This challenge involves building the same Task Manager application twice to compare two distinct AI-assisted development workflows: **Vibe Coding** (using generative UI/app tools) and **AI Pair Programming** (using editor-integrated assistants). By the end, you'll have a clear understanding of the strengths and weaknesses of each approach.

## The App You Are Building

You will be building a standalone Task Manager. You must strictly follow the requirements outlined in the [app-spec.md](./app-spec.md) file for both versions.

## Your Folders

- `/vibe-version`: Use this folder for the version built using a "vibe" tool (e.g., Lovable, v0, Google AI Studio Build).
- `/pair-version`: Use this folder for the version built using an AI pair programming assistant (e.g., GitHub Copilot, Cursor).

## Live Deployments

- Vibe version: https://mellifluous-raindrop-fd531e.netlify.app
- Pair version: https://storied-zabaione-b3de75.netlify.app

## Comparison Table

| Dimension | Vibe Version (Antigravity) | Pair Version (GitHub Copilot) |
| :--- | :--- | :--- |
| **Speed** | 11 seconds from prompt to fully functioning app. | 18 minutes to build file-by-file. |
| **Control** | Zero control over architecture. The AI decided to put everything into one file. | Complete control. I forced the AI to build specific modular components by acting as the driver. |
| **Code Quality** | Monolithic and brittle. Generated 1 single file (`taskManager.jsx`). | Clean and modular. Separated into 5 distinct components (`App.jsx`, `TaskInput.jsx`, etc.). |
| **Explainability** | Harder to explain without a deep read-through since the entire logic was generated in one shot. | Perfectly explainable because I wrote the architectural comments and accepted/rejected suggestions (15 accepted, 4 rejected). |
| **Editability** | Difficult. Adding a new feature would require untangling a massive single file. | Highly editable. Adding a new feature just requires updating the specific isolated component. |

## When I Would Use Each Tool

- **Vibe coding tool for:** Rapid prototyping or testing a UI concept quickly, because it can spin up a functional interface in 11 seconds, but the monolithic code structure makes it unsuitable for long-term maintenance.
- **AI pair programming for:** Building production-ready, scalable features, because it allows me to enforce strict software architecture (like my 5-component setup) and maintain total ownership of the engineering logic while significantly speeding up boilerplate typing.

## Tools Used

- **Vibe tool used:** Antigravity
- **Pair tool used:** GitHub Copilot

## How to Submit

1. **PR Link:** [Insert your Pull Request link here]
2. **Video Link:** [Insert your recorded Google Drive video link here]