# Snippr Tool

Snippr is a simple Node.js application that allows users to store and retrieve code snippets. It provides a RESTful API for managing snippets, including adding new snippets, fetching existing ones, and user authentication with JWT-based authorization.

## Features

- Add new code snippets
- Retrieve snippets by ID
- Fetch all snippets
- Filter snippets by programming language
- User authentication (register, login, logout)
- JWT-based authorization for secure API access
- Frontend integration for managing snippets

## Project Structure

```
snippr-tool
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains business logic for snippets and users
│   │   ├── snippetsController.js
│   │   └── userController.js
│   ├── routes                # Defines API routes
│   │   ├── snippetsRoutes.js
│   │   └── userRoutes.js
│   └── models                # Data structure and database logic
│       ├── snippetModel.js
│       └── userModel.js
├── public                    # Frontend files
│   └── index.html
├── package.json              # npm configuration file
├── .env                      # Environment variables
├── .gitignore                # Files to ignore by Git
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd snippr-tool
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and set the necessary environment variables:
   ```
   PORT=3002
   ENCRYPTION_KEY=your-32-character-encryption-key
   JWT_SECRET=your-very-secure-secret-key
   ```

5. Seed the database (optional):
   ```
   node src/seed.js
   ```

## Usage

To start the application, run:
```
npm start
```

The API will be available at `http://localhost:<PORT>`.

## Frontend

The frontend is located in the `public` directory. To access it, open `http://localhost:<PORT>` in your browser.

## API Endpoints

### User Authentication

#### POST /users/register

Register a new user.

**Request Body:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

#### POST /users/login

Log in with email and password to receive a JWT token.

**Request Body:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "your-jwt-token"
}
```

### Snippets

#### POST /snippets

Add a new code snippet (requires a valid JWT token).

**Request Headers:**
```
Authorization: Bearer <your-jwt-token>
```

**Request Body:**
```json
{
  "title": "Snippet Title",
  "code": "console.log('Hello, World!');",
  "language": "JavaScript"
}
```

#### GET /snippets/:id

Retrieve a snippet by its ID (requires a valid JWT token).

**Request Headers:**
```
Authorization: Bearer <your-jwt-token>
```

#### GET /snippets

Fetch all snippets (requires a valid JWT token).

**Request Headers:**
```
Authorization: Bearer <your-jwt-token>
```

#### GET /snippets/language/:language

Filter snippets by programming language (requires a valid JWT token).

**Request Headers:**
```
Authorization: Bearer <your-jwt-token>
```

## Environment Variables

The following environment variables are required:

- `PORT`: The port on which the server will run (default: `3002`).
- `ENCRYPTION_KEY`: A 32-character key for encrypting snippet data.
- `JWT_SECRET`: A secret key for signing JWT tokens.

## Future Enhancements

- Add user roles (e.g., admin, regular user).
- Implement snippet sharing functionality.
- Add pagination for fetching snippets.
- Improve frontend UI/UX.

## License

This project is licensed under the MIT License.