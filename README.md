# Task Management App

Welcome to the Task Management App! This application allows users to efficiently manage their tasks, providing features such as user authentication, a task dashboard, CRUD operations for tasks, task categories, and a responsive design.

## Development Environment Setup

### Technologies and Versions
- Nest.js: 10.2.1
- React.js: 18.2.0
- TypeORM: 0.3.17
- JSON Web Token (JWT): 3.2.0
- Bcrypt: 5.1.1
- TypeScript: 5.1.3
- React: 18.2.0
- React Cookie: 6.1.1
- Formik: 2.4.5
- Axios: 1.6.2
- React Redux: 8.1.3
- Sass: 1.69.5
- Yup: 1.3.2
- Redux Toolkit: 1.9.7
- Material UI: 5.14.18

### Database Configuration
The application uses TypeORM for database management. Please configure your database connection in the `ormconfig.json` file. Update the `username`, `password`, `database`, and other relevant fields according to your database setup.

```json
// ormconfig.json
{
  "type": "your_database_type",
  "host": "your_database_host",
  "port": 5050,
  "username": "your_database_username",
  "password": "your_database_password",
  "database": "your_database_name",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true,
  "logging": true
}
