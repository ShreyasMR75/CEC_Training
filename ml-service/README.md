ML service (Flask) — Phase 1

- Create and activate a venv (recommended)
  python -m venv venv
  source venv/bin/activate

- Install requirements:
  pip install -r requirements.txt

- Run:
  python app.py

- Health: GET /health -> { status: 'ok' }
- POST /predict accepts JSON and returns a placeholder response (no real model yet).
