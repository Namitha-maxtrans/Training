import http from "http";

import { User } from "./types/user.js";
import { validateUser } from "./utils/validate.js";

import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "./services/userService.js";


const server = http.createServer(async (req, res) => {

    // Convert URL into a URL object
    const url = new URL(
        req.url || "/",
        `http://${req.headers.host}`
    );

    const method = req.method;
    const pathname = url.pathname;


    // ==========================================
    // GET /users
    // ==========================================

    if (method === "GET" && pathname === "/users") {

        const allUsers = await getUsers();

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(allUsers));
    }


    // ==========================================
    // GET /users/:id
    // ==========================================

    else if (
        method === "GET" &&
        pathname.startsWith("/users/")
    ) {

        const id = Number(pathname.split("/")[2]);

        const user = await getUserById(id);

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


    // ==========================================
    // POST /users
    // ==========================================

    else if (
        method === "POST" &&
        pathname === "/users"
    ) {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", async () => {

            try {

                // Convert JSON string into object
                const newUser: User = JSON.parse(body);

                // Validate user
                const validationError = validateUser(newUser);

                if (validationError) {

                    res.writeHead(400, {
                        "Content-Type": "application/json"
                    });

                    res.end(JSON.stringify({
                        message: validationError
                    }));

                    return;
                }

                // Create user using service
                const createdUser = await createUser(newUser);

                res.writeHead(201, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify(createdUser));

            } catch (error) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Invalid JSON format"
                }));
            }
        });
    }


    // ==========================================
    // PUT /users/:id
    // ==========================================

    else if (
        method === "PUT" &&
        pathname.startsWith("/users/")
    ) {

        const id = Number(pathname.split("/")[2]);

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", async () => {

            try {

                // Convert JSON string into object
                const updatedUser: User = JSON.parse(body);

                // Validate user
                const validationError = validateUser(updatedUser);

                if (validationError) {

                    res.writeHead(400, {
                        "Content-Type": "application/json"
                    });

                    res.end(JSON.stringify({
                        message: validationError
                    }));

                    return;
                }

                // Update user using service
                const result = await updateUser(id, updatedUser);

                if (!result) {

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

                res.end(JSON.stringify(result));

            } catch (error) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Invalid JSON format"
                }));
            }
        });
    }


    // ==========================================
    // DELETE /users/:id
    // ==========================================

    else if (
        method === "DELETE" &&
        pathname.startsWith("/users/")
    ) {

        const id = Number(pathname.split("/")[2]);

        // Delete user using service
        const deletedUser = await deleteUser(id);

        if (!deletedUser) {

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

        res.end(JSON.stringify({
            message: "User deleted successfully",
            user: deletedUser
        }));
    }


    // ==========================================
    // Invalid route
    // ==========================================

    else {

        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }

});


// ==========================================
// Start Server
// ==========================================

server.listen(3000, () => {

    console.log(
        "Server running at http://localhost:3000"
    );

});