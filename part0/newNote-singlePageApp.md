sequenceDiagram
Browser -->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note left of Server: Server sends JSON data to the Browser with no further HTTP request

Server -->> Browser: {"message":"note created"}
Note Right of Browser: Borwser renders the data including the newly created note
