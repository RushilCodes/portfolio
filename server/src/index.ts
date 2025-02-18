Bun.serve({
    port: 3000, // The port on which the server will listen
    fetch(request) {
      return new Response("Welcome to Bun!");
    },
  });
  
  console.log("Server is running on http://localhost:3000");
  