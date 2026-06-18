# WayPoint 🧭

WayPoint is a QR-assisted indoor navigation system that helps users find the shortest route inside buildings where GPS is unreliable or unavailable.

The system models buildings as graphs and uses Dijkstra's algorithm to compute the shortest path between locations.
---

## Features

- Interactive indoor map visualization
- Graph-based building representation
- Shortest path computation using Dijkstra's Algorithm
- Room-to-room navigation
- Route highlighting on map
- Distance estimation
- Modern and responsive user interface
- JSON-based graph storage


## Project Structure

```text
Indoor-Navigation/
│
├── backend/
│   ├── app.py
│   ├── dijkstra.py
│   ├── graph_manager.py
│   ├── graph.json
│   ├── requirements.txt
│   │
│   └── routes/
│       ├── graph_routes.py
│       └── path_routes.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   │
│   ├── js/
│   │   ├── api.js
│   │   ├── edge.js
│   │   ├── map.js
│   │   ├── node.js
│   │   └── pathfinder.js
│   │
│   └── assets/
│       └── floor.png
│
└── README.md
```

---

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Python
- Flask

### Algorithm

- Dijkstra's Shortest Path Algorithm

### Data Storage

- JSON

---

## How It Works

1. User selects a source room.
2. User selects a destination room.
3. Frontend sends a request to the Flask backend.
4. Backend computes the shortest path using Dijkstra's algorithm.
5. Route information is returned as JSON.
6. Frontend highlights the shortest path on the indoor map.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Indoor-Navigation.git
cd Indoor-Navigation
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
python app.py
```

Backend runs at:

```text
http://127.0.0.1:5000
```

---

## Frontend Setup

Open a new terminal:

```bash
cd frontend
```

Start local server:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

---

## API Endpoints

### Get Graph

```http
GET /graph
```

Returns:

```json
{
  "nodes": [],
  "edges": []
}
```

---

### Find Path

```http
POST /path
```

Request:

```json
{
  "source": "room101",
  "target": "room204"
}
```

Response:

```json
{
  "path": [
    "room101",
    "room102",
    "room104",
    "room204"
  ],
  "distance": 12
}
```

---

## Sample Graph

```text
Room101
   |
Room102 ---- Room104
   |            |
Room103 ---- Room204
```

---

## Future Enhancements

- QR code based location detection
- Multi-floor navigation
- Accessibility-aware routing
- Dynamic obstacle handling
- Crowdsourced map updates
- Real-time congestion estimation
- Mobile application support


## Applications

- Educational Institutions
- Hospitals
- Shopping Malls
- Airports
- Government Buildings
- Corporate Offices



## Authors
Amrutha K S
Sree Lekshmi H
Developed as an Indoor Navigation MVP project using graph-based pathfinding and modern web technologies.

---

