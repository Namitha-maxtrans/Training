import { users } from "../data/users.js";
import { User } from "../types/user.js";


// GET all users
export async function getUsers(): Promise<User[]> {

    return users;
}


// GET user by ID
export async function getUserById(
    id: number
): Promise<User | undefined> {

    const user = users.find(
        user => user.id === id
    );

    return user;
}


// CREATE user
export async function createUser(
    user: User
): Promise<User> {

    user.id = users.length + 1;

    users.push(user);

    return user;
}


// UPDATE user
export async function updateUser(
    id: number,
    updatedUser: User
): Promise<User | undefined> {

    const index = users.findIndex(
        user => user.id === id
    );

    if (index === -1) {
        return undefined;
    }

    updatedUser.id = id;

    users[index] = updatedUser;

    return updatedUser;
}


// DELETE user
export async function deleteUser(
    id: number
): Promise<User | undefined> {

    const index = users.findIndex(
        user => user.id === id
    );

    if (index === -1) {
        return undefined;
    }

    const deletedUser = users.splice(index, 1);

    return deletedUser[0];
}