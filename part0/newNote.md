sequenceDiagram
Browser -->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server -->> Browser: Redirect URL with location /exampleapp/notes to make a GET request
Browser -->> Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
Server-->>Browser: HTML document
Browser-->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server -->> Browser: the css file
Browser-->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server -->> Browser: the JavaScript file
Note right of Browser: The browser starts executing the JavaScript code that fetches the JSON from the server
Browser -->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server -->> Browser: [{content: "you and me ", date: "2023-11-18T11:59:33.030Z"},…]
Note right of Browser: The browser executes the callback function that renders the notes
