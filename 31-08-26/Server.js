const http = require("http");

let users = [
    {
        id: 1,
        name: "John",
        age: 25
    },
    {
        id: 2,
        name: "Alice",
        age: 22
    }
]; 

const server = http.createServer((req, res) => {

    // Convert URL into a URL object
    const url = new URL(req.url, `http://${req.headers.host}`); //headers.host will give host and portname

    const method = req.method;
    const pathname = url.pathname;

    
    // GET /users
    
    if (method === "GET" && pathname === "/users") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users)); 
    }

    // -------------------------
    // GET /users/:id
    // -------------------------
    else if (method === "GET" && pathname.startsWith("/users/")) {

        const id = Number(pathname.split("/")[2]);

        const user = users.find(user => user.id === id);

        if (!user) {
            res.writeHead(404, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "User not found"
            }));

            return;
        }

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(user));
    }

    
    // POST /users //JSON.stringify() converts a JavaScript value/object into a JSON string.
    // JSON.parse() converts a JSON string into a JavaScript object or value
    
    else if (method === "POST" && pathname === "/users") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const newUser = JSON.parse(body);

            newUser.id = users.length + 1;

            users.push(newUser);

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(newUser));
        });
    }

    
    // PUT /users/:id

    else if (method === "PUT" && pathname.startsWith("/users/")) {

        const id = Number(pathname.split("/")[2]);  //split converts string to array
 
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const updatedUser = JSON.parse(body);

            const index = users.findIndex(user => user.id === id);

            if (index === -1) {

                res.writeHead(404, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "User not found"
                }));

                return;
            }

            updatedUser.id = id;

            users[index] = updatedUser;

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify(updatedUser));
        });
    }

    
    // DELETE /users/:id
    
    else if (method === "DELETE" && pathname.startsWith("/users/")) {

        const id = Number(pathname.split("/")[2]);

        const index = users.findIndex(user => user.id === id);

        if (index === -1) {

            res.writeHead(404, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "User not found"
            }));

            return;
        }

        const deletedUser = users.splice(index, 1);

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "User deleted successfully",
            user: deletedUser[0]
        }));
    }

    
    // Invalid route
    
    else {

        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});