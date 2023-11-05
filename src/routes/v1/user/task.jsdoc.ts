/**
 * @swagger
 * /tasks/search:
 *   get:
 *     summary: Search for tasks
 *     description: Search for tasks based on query parameters
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: query
 *         name: query
 *         description: The query parameters for task search
 *         schema:
 *           $ref: '#/components/schemas/TaskQuery'
 *     responses:
 *       '200':
 *         description: Successfully retrieved tasks
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Get the count of tasks
 *     description: Get the total count of tasks based on query parameters
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: query
 *         name: query
 *         description: The query parameters for task count
 *         schema:
 *           $ref: '#/components/schemas/TaskQuery'
 *     responses:
 *       '200':
 *         description: Successfully retrieved the task count
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /tasks/exists:
 *   get:
 *     summary: Check if tasks exist
 *     description: Check if tasks exist based on query parameters
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: query
 *         name: query
 *         description: The query parameters for checking task existence
 *         schema:
 *           $ref: '#/components/schemas/TaskQuery'
 *     responses:
 *       '200':
 *         description: Successfully checked task existence
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Get a list of all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       '200':
 *         description: Successfully retrieved all tasks
 *   post:
 *     summary: Create a new task
 *     description: Create a new task with the provided data
 *     tags:
 *       - Tasks
 *     requestBody:
 *       description: Task object to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskCreate'
 *     responses:
 *       '200':
 *         description: Successfully created a new task
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /tasks/{pagination}:
 *   get:
 *     summary: Get tasks with pagination
 *     description: Get a list of tasks with pagination
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: pagination
 *         description: The pagination parameters (e.g., page number)
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved tasks with pagination
 */

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Update a task
 *     description: Update an existing task with the provided data
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the task to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Task object to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskUpdate'
 *     responses:
 *       '200':
 *         description: Successfully updated the task
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     description: Delete a task based on the provided ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the task to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted the task
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     TaskCreate:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         due_date:
 *           type: string
 *         priority:
 *           type: string
 *       required:
 *         - user
 *         - title
 *         - description
 *         - due_date
 *         - priority
 *     TaskUpdate:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         due_date:
 *           type: string
 *         priority:
 *           type: string
 *         completed:
 *           type: boolean
 *     TaskQuery:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         user:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         due_date:
 *           type: string
 *         priority:
 *           type: string
 *         completed:
 *           type: string
 */
