# To-Do List Application

A simple and intuitive To-Do List application built with React. This app allows users to add, remove, and mark tasks as complete. It includes features such as input validation, dynamic task display, sorting, filtering, and localStorage integration to persist tasks across page reloads.

## Features

- **Add Tasks**: Enter a task and add it to the list.
- **Input Validation**: Ensure tasks are not empty before adding.
- **Remove Tasks**: Remove tasks from the list.
- **Toggle Completion**: Mark tasks as complete or incomplete.
- **Filtering**: View all tasks, completed tasks, or incomplete tasks.
- **Sorting**: Sort tasks by creation date or alphabetically.
- **LocalStorage Integration**: Persist tasks across page reloads.

## Demo

[Live Demo](#)(https://todo-list-celebal.vercel.app/))

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/theharshdadhich/todo-list.git
   cd todo-list
2. **Install dependencies:**

   ```bash
   npm install
3. **Run the application:**
   ```bash
   npm start
The app will be available at http://localhost:3000.

## Usage
1. Add a Task:
- Enter a task in the input field.
- Click "Add Task".
- The task will appear in the list if the input is valid.
2. Remove a Task:
- Click the "Remove" button next to a task to remove it from the list.
3. Toggle Task Completion:
- Click on a task to mark it as completed or incomplete.
4. Filter Tasks:
- Use the filter buttons to view all tasks, completed tasks, or incomplete tasks.
5. Sort Tasks:
- Use the sort dropdown to sort tasks by date or alphabetically.

## Code Structure

- **src/components/ToDoList.js**: The main To-Do List component.
- **src/components/ToDoList.css**: CSS styles for the To-Do List component.
- **src/App.js**: The main application component.
- **src/App.css**: CSS styles for the application.

## Testing Guidance

To test the features of the To-Do List application:

1. **Add a Task**: Enter a valid task in the input field and click "Add Task". Verify that the task appears in the list.
2. **Input Validation**: Enter an invalid task (e.g., empty or spaces) and click "Add Task". Verify that an error message is displayed.
3. **Remove a Task**: Click "Remove" next to a task. Verify that the task is removed from the list.
4. **Toggle Completion**: Click on a task to mark it as completed or incomplete. Verify that the task's appearance changes (strikethrough for completed tasks).
5. **Filtering**: Use the filter buttons to switch between "All", "Completed", and "Incomplete" views. Verify that tasks are filtered correctly.
6. **Sorting**: Use the sort dropdown to sort tasks by date or alphabetically. Verify that tasks are sorted accordingly.
7. **Local Storage**: Add tasks, refresh the page, and verify that tasks persist.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.


   

