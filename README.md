# Agriculture Smart Farming — Phase 1 prototype scaffold

This repository now contains a Phase-1 scaffold for the Agriculture Smart Farming prototype.

Structure:
- client/      React frontend (Vite)
- server/      Node + Express backend (API stubs)
- ml-service/  Python + Flask ML microservice (stubs)

See individual README files in each folder for run instructions.

Run locally (high level):
1. Copy .env.example -> .env and set values as needed.

2. Server:
   cd server && npm install && npm run dev

3. ML service:
   cd ml-service && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt && python app.py

4. Client:
   cd client && npm install && npm run dev

Each service includes a simple health/root route so you can demonstrate the multi-service architecture.
