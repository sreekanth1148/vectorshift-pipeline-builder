# VectorShift Pipeline Builder

This project is a node-based pipeline builder built using ReactFlow (frontend) and FastAPI (backend).

The application allows users to visually create pipelines using different node types, connect them, and validate the structure through backend integration.



## Features

- Node abstraction using a reusable BaseNode component
- Custom node types: Input, LLM, Text, Output
- Dynamic Text node with variable detection using {{variable}}
- Auto-arrange functionality (Left → Right layout)
- Animated edges
- Backend integration to validate pipeline structure
- DAG detection logic
- Responsive and clean UI

---

## Tech Stack

Frontend:
- React
- ReactFlow
- Zustand (state management)

Backend:
- Python
- FastAPI

---

## How to Run

### Frontend

```bash

cd frontend
npm install
npm start

###Backend

cd backend
uvicorn main:app --reload

##Backend Endpoint

POST /pipelines/parse

Returns:

{
  "num_nodes": int,
  "num_edges": int,
  "is_dag": bool
}

##Author

Avula Sreekanth