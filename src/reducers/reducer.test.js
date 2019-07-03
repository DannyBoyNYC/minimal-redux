import React from 'react';
import ReactDOM from 'react-dom';
import logReducer from './logReducer'

expect(
  logs([],{ type: 'GET_LOGS' })
  toEqual(
    "logs": [
      {
        "id": 2,
        "message": "Fixed hard drive on workstation 002",
        "attention": false,
        "tech": "John Doe",
        "date": "2019-05-31T16:18:04.245Z"
      },
      {
        "id": 3,
        "message": "1122 wireless down - now up",
        "attention": false,
        "tech": "Sam Smith",
        "date": "2019-07-01T20:42:18.064Z"
      },
      {
        "id": 4,
        "message": "Workstation 026 is up and running",
        "attention": false,
        "tech": "Sara Wilson",
        "date": "2019-05-31T19:57:35.544Z"
      }
    ]
  )
)