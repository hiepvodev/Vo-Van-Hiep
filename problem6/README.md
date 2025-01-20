# Scoreboard API Service Module

## Overview
This module handles updating and retrieving user scores for a live scoreboard. It supports secure and efficient real-time updates to ensure the scoreboard reflects the top 10 users accurately.

## API Endpoints

### 1. Update User Score
**Endpoint:** `POST /api/score/update`  
**Description:** Updates the score of a user after completing an action.

**Request:**
```json
{
  "userId": "string",
  "scoreIncrement": "number"
}

Response:
200 OK: Score updated successfully.
400 Bad Request: Invalid input data.
401 Unauthorized: Unauthorized access.
500 Internal Server Error: Server encountered an error.

