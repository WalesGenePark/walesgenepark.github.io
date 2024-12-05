#!/bin/bash
source scripts/venv/bin/activate
python -m pip install -r scripts/requirements.txt
python scripts/download_avatars.py
