# HumanChain AI Safety Incident Log API

A RESTful backend API for logging and managing hypothetical AI safety incidents, built with Node.js, Express, and MongoDB.

---

## Language & Framework

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Validation:** Joi
- **Environment Variables:** dotenv

---

## Project Structure

human-chain-api/

├── app.js

├── config/

│ └── mongoose-connect.js

├── controllers/

│ └── incident-controller.js

├── models/

│ └── incident-model.js

├── routes/

│ └── incident-routes.js

├── validate/

│ └── validator.js

├── .env

└── README.md


---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/Shafe-Ahsan/Human-Chain-API-Backened.git

cd human-chain-api


### 2. Install Dependencies

npm install


### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

MONGO_URL=your_mongodb_connection_string



Replace `your_mongodb_connection_string` with your actual MongoDB URI.

---

## Database Configuration

- The API uses MongoDB to store incidents.
- The incident schema fields:
  - `title` (string, required)
  - `description` (string, required)
  - `severity` (string, required: "Low", "Medium", or "High")
  - `reported_at` (date, auto-set)

Mongoose will automatically create the collection and schema on first use.

---

## Running the Project

Start the server (default port: 3000):

node app.js


If successful, you will see:

Database connected
Server listening on port 3000


---

## API Endpoints & Usage Examples

All endpoints accept and return JSON.

### 1. Get All Incidents

- **GET** `/incidents`
- **Response:** `200 OK` with array of incidents

**Example:**

curl -X GET http://localhost:3000/incidents


---

### 2. Create a New Incident

- **POST** `/incidents`
- **Body:** 

{
"title": "AI output leak",
"description": "Sensitive data was leaked by the AI model.",
"severity": "High"
}

- **Response:** `201 Created` with the created incident object

**Example:**

curl -X POST http://localhost:3000/incidents
-H "Content-Type: application/json"
-d '{"title":"AI output leak","description":"Sensitive data was leaked by the AI model.","severity":"High"}'


---

### 3. Get Incident by ID

- **GET** `/incidents/:id`
- **Response:** `200 OK` with the incident object, or `404 Not Found` if not found

**Example:**

curl -X GET http://localhost:3000/incidents/<incident_id>


---

### 4. Delete Incident by ID

- **DELETE** `/incidents/:id`
- **Response:** `204 No Content` if deleted, or `404 Not Found` if not found

**Example:**

curl -X DELETE http://localhost:3000/incidents/<incident_id>


---

## Design Decisions & Challenges

- **Validation:** Joi ensures all required fields are present and severity is restricted to allowed values.
- **Error Handling:** API returns clear error messages and appropriate HTTP status codes for validation, not found, and server errors.
- **Persistence:** Mongoose ODM is used for schema definition and database interaction, simplifying data modeling and validation.
- **RESTful Design:** The API follows REST conventions for clarity and extensibility.
- **Modularity:** The codebase is organized into logical modules (routes, controllers, models, validation, config) for maintainability and scalability.

---




