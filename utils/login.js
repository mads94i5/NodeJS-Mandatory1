// THIS IS NOT A GOOD WAY OF HANDLING USER CREDENTIALS, NOT ACCEPTABLE FOR PRODUCTION, ONLY FOR MOCKUP/TESTING
const users = [
    {
      username: "user",
      password: "password"
    },
    {
      username: "admin",
      password: "adminpassword"
    }
];

let loggedInUser;

export function login(username, password) {
    for (const user of users) {
        if (user.username === username && user.password === password) {
            loggedInUser = username;
            return username;
        }
    }
    return undefined;
}

export function logout() {
    if (loggedInUser) {
        loggedInUser = undefined;
    }
}

export function getLoggedInUser() {
    return loggedInUser;
}