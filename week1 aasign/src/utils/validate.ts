import { User } from "../types/user.js";

export function validateUser(user: User): string | null {

    if (!user.name) {
        return "Name is required";
    }

    if (!user.email) {
        return "Email is required";
    }

    if (user.age === undefined || user.age === null) {
        return "Age is required";
    }

    if (typeof user.name !== "string") {
        return "Name must be a string";
    }

    if (typeof user.email !== "string") {
        return "Email must be a string";
    }

    if (typeof user.age !== "number") {
        return "Age must be a number";
    }

    if (!user.email.includes("@")) {
        return "Invalid email";
    }

    return null;
}