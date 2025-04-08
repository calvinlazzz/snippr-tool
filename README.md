# Snippr Tool

Snippr is a simple Node.js application that allows users to store and retrieve code snippets. It provides a RESTful API for managing snippets, including adding new snippets and fetching existing ones.

## Features

- Add new code snippets
- Retrieve snippets by ID
- Fetch all snippets
- Filter snippets by programming language

## Project Structure

```
snippr-tool
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains business logic for snippets
│   │   └── snippetsController.js
│   ├── routes                # Defines API routes
│   │   └── snippetsRoutes.js
│   └── models                # Data structure for storing snippets
│       └── snippetModel.js
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

4. Create a `.env` file in the root directory and set the necessary environment variables (e.g., PORT).

## Usage

To start the application, run:
```
npm start
```

The API will be available at `http://localhost:<PORT>`.

## API Endpoints

### POST /snippets

Add a new code snippet.

**Request Body:**
```json
{
  "title": "Snippet Title",
  "code": "console.log('Hello, World!');",
  "language": "JavaScript"
}
```

### GET /snippets/:id

Retrieve a snippet by its ID.

### GET /snippets

Fetch all snippets.

### GET /snippets/language/:language

Filter snippets by programming language.