# KLM interview task

This task is seperated to two projects, a client written in angular 6 and typescript, and a server written in node.js with typescript.

## The Server
The server is a simple express-apollo server, written with typescript that serves some mock data through a GraphQL endpoint.
The server has a few unit tests to test the GraphQL schemas.

## The Client
The client is an angular 6 application with sass, it is a single page with no routes (as the design dictated), It has a form for retrieving booking data, and uses angular reactive forms. 
When the form is submitted it will use the graphql service with an apollo angular client, to ask the server fot the booking data, the client is responsive and changes display on mobile phones.
