# Task Manager App

A dynamic and user-friendly Task Manager application that allows users to manage tasks and projects efficiently. Built with HTML, CSS, JavaScript, and bundled using Webpack.

## Features

- **Task Management**: Create, and delete tasks.
- **Project Association**: Organize tasks under specific projects.
- **Due Dates**: Assign due dates to tasks.
- **Task Prioritization**: Mark tasks with different priority levels.
- **User-Friendly Interface**: Intuitive and responsive design.
- **Webpack**: Utilized for module bundling and asset management.
- **Testing**: Comprehensive testing with Jest to ensure reliability.

## Installation

To get started, clone the repository and install the necessary dependencies:

1. Clone the repository:

   ```bash
   git clone https://github.com/AdishtJaglan/task-manager.git
   cd task-manager
   ```

2. Install dependencies

   ```bash
    npm install
   ```

3. Run it locally

   ```bash
    npm run start
   ```

## SOLID Principles

This project follows SOLID principles to ensure the code is clean, maintainable, and scalable.

- Single Responsibility Principle (SRP): Each class in the project has a single responsibility. For instance, the Project class handles project-specific logic, the Task class manages task-specific behavior, and the DOM class is responsible for manipulating the DOM elements.

- Open/Closed Principle (OCP): The classes are open for extension but closed for modification. For example, the Task class can be extended to add new types of tasks without altering the existing implementation.

- Liskov Substitution Principle (LSP): Subtypes in the project can replace their base types without affecting the correctness of the program. The Task class adheres to this principle, allowing for different task types to be used interchangeably.

- Interface Segregation Principle (ISP): The project avoids using large, unwieldy interfaces. Instead, it uses specific methods and properties appropriate for each class, ensuring that no class is forced to implement methods it does not use.

- Dependency Inversion Principle (DIP): The project depends on abstractions rather than concrete implementations. For example, the Project class interacts with the Task class through well-defined methods, rather than directly manipulating the task's internal state.

## Contributing

Contributions are welcome!
