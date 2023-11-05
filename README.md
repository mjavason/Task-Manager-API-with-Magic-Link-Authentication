# Task Manager API

Task Manager API offers a straightforward solution for efficient task management. With this API, you can create, track, and prioritize tasks effortlessly. What sets it apart is the user-friendly and secure login system, powered by Magic Link Authentication and cookies.

## Documentation

Explore the API's endpoints, schemas, and authentication details through our Swagger documentation, available [here](https://task-manager-v2.onrender.com/docs).

## Main Scripts

1. **Build**

   - Command: `npm run build`
   - Use this script to build the project, which is the initial step in setting up the API.

2. **Start**

   - Command: `npm run start`
   - Once the project is built, use this command to start the API for production use.

3. **Development Mode**
   - Command: `npm run dev`
   - This script is ideal for development as it enables live-reloading and other helpful tools for debugging and testing.

## Setting Up Environment Variables

Before running the Task Manager API, you'll need to set up these environment variables. Create a `.env` file in the project root and add these variables with your values:

```env
# Secret key for access token (replace 'xxxx' with your own secret)
ACCESS_TOKEN_SECRET=xxxx

# Application name (e.g., 'TemplateApp')
APP_NAME=TemplateApp

# Secret key for JWT (replace 'user' with your own secret)
JWT_SECRET=user

# Email address for sending emails (replace 'xxxx@mail.com' with your own email)
MAIL_ADDRESS=xxxx@mail.com

# Password for the email address (replace 'xxxx' with your own password)
MAIL_PASSWORD=xxxx

# MongoDB connection URL (replace 'xxxx' with your MongoDB URL)
MONGODB_URL=xxxx

# Name of the MongoDB database (replace 'xxxx' with your database name)
MONGO_DB_NAME=xxxx

# Secret key for refresh token (replace 'xxxx' with your own secret)
REFRESH_TOKEN_SECRET=xxxx

# Link to your site (replace 'xxxx' with your site link)
SITE_LINK=xxxx

# Default username (e.g., 'user@mail.com')
USERNAME=user@mail.com
```

## Getting Started

To get started with the Task Manager API, follow these steps:

1. Clone the repository: `git clone https://github.com/mjavason/Task-Manager-API.git`

2. Install dependencies: `npm install`

3. Build the project: `npm run build`

4. Start the API:
   - For production use: `npm run start`
   - For development with live-reloading: `npm run dev`

## API Endpoints

The API provides the following endpoints for managing tasks:

- `GET /tasks`: Retrieve a list of all tasks.
- `POST /tasks`: Create a new task.
- `PATCH /tasks/:id`: Update an existing task.
- `DELETE /tasks/:id`: Delete a task.
- `GET /tasks/search`: Search for tasks based on query parameters.
- `GET /tasks/count`: Get the total count of tasks based on query parameters.
- `GET /tasks/exists`: Check if tasks exist based on query parameters.

## Authentication

The Task Manager API offers a secure and user-friendly login experience. Magic Link Authentication, coupled with cookies, ensures seamless and robust authentication for our users. This system provides a convenient and safe way to access the platform, and users can log in with ease.

## Contributing

Contributions to the API are welcomed! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.