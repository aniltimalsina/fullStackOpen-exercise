sequenceDiagram
Browser -->> Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
Server-->>Browser: HTML document
Browser-->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server -->> Browser: the css file
Browser-->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
Server -->> Browser: the JavaScript file
Note right of Browser: The browser starts executing the JavaScript code that fetches the JSON from the server
Browser -->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server -->> Browser: [{ "content": "1","date": "2023-11-19T13:43:07.675Z"},…]
Note right of Browser: The browser executes the callback function that renders the notes
