# TaskSphere Schema Analysis & Fixes

## 1. Identified Schema Issues

**Issue 1: Missing Primary Keys**
- **Description:** None of the tables (`Users`, `Projects`, `Tasks`, `UserProjects`) define a primary key.
- **Impact:** The system cannot guarantee uniqueness for records. This allows duplicate records to be inserted, leading to data redundancy and inconsistencies (e.g., duplicate users or projects). It also makes it impossible to uniquely identify and update/delete specific records.

**Issue 2: Missing Foreign Keys and Constraints**
- **Description:** Tables that logically relate to each other (e.g., `Tasks` relying on `project_name` and `assigned_user`) do not use foreign key constraints.
- **Impact:** This allows orphan records. For example, a task could be assigned to a user that does not exist in the `Users` table. Deleting a user or project will not cascade or prevent updates, causing broken relationships across the system.

**Issue 3: Incorrect Data Types**
- **Description:** Several columns have syntax errors or use inappropriate datatypes.
  - `Users.email` uses `ID(100)` (an invalid SQL type).
  - `Tasks.task_name` uses `INT(100)` (names should be text like `VARCHAR`).
  - `UserProjects.user_name` uses `VAR(100)` (invalid type).
  - `Projects` strings use `CHAR(100)` instead of `VARCHAR(100)`, which wastes space by padding shorter strings.
- **Impact:** System crashes or SQL errors during setup. Even if some databases forgive these, using the wrong data type (like `INT` for a name) makes it impossible to store meaningful text data, rendering the database useless for those fields.

**Issue 4: Lack of Surrogates (IDs) for Identification**
- **Description:** The original schema relies heavily on names (like `user_name`, `project_name`) for linking entities in tables like `UserProjects` and `Tasks`.
- **Impact:** Text fields are less efficient for joins and indexing. If a user or project changes its name, every dependent record must be updated simultaneously, or the data integrity will break.

**Issue 5: Missing Nullability & Data Constraints**
- **Description:** Important columns like `name`, `email`, and `project_name` are not marked as `NOT NULL`. The email constraint should ideally be `UNIQUE`.
- **Impact:** Null values could be inserted for critical fields, resulting in nameless projects or users without emails.

---

## 2. Proposed Improvements & The Redesigned Schema

**Fix 1: Add Auto-Incrementing Primary Keys**
- Introduced `user_id`, `project_id`, and `task_id` (all `INT AUTO_INCREMENT PRIMARY KEY`) to cleanly identify records. This removes reliance on text-based naming and makes querying much faster.

**Fix 2: Implement Foreign Key Relationships**
- Replaced text references with integer ID references.
- Added explicit `FOREIGN KEY` constraints.
- Added `ON DELETE CASCADE` or `ON DELETE SET NULL` responses to maintain data integrity when related records are removed.

**Fix 3: Fix Data Types and Normalization**
- Corrected invalid types like `ID` and `VAR` to `VARCHAR`.
- Replaced `CHAR(100)` with `VARCHAR(100)` for efficiency.
- Corrected `Tasks.task_name` to be a `VARCHAR` instead of `INT`.

**Fix 4: Enforce Constraints**
- Added `NOT NULL` to essential fields like names and emails.
- Added a `UNIQUE` constraint to `Users.email`.

**Redesigned Schema Structure (Summary):**
- **`Users`**: `user_id` (PK), `name` (Not Null), `email` (Unique, Not Null).
- **`Projects`**: `project_id` (PK), `project_name` (Not Null), `owner_id` (FK to Users).
- **`Tasks`**: `task_id` (PK), `task_name` (Not Null), `project_id` (FK to Projects), `assigned_user_id` (FK to Users), `status`.
- **`UserProjects` (Junction Table)**: `user_id` (FK to Users), `project_id` (FK to Projects), Composite PK (`user_id`, `project_id`). This standardizes the Many-to-Many relationship between Users and Projects.
