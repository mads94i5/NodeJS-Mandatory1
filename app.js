import express from "express";
const app = express();
import * as routes from "./utils/routes.js";
import { login } from "./utils/login.js"
import { getDocsMaxPageNumber } from "./utils/utils.js";

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(routes.homePage);
});

app.get("/admin", (req, res) => {
    res.send(routes.adminPage);
});

app.get("/login", (req, res) => {
    res.send(routes.loginPage);
});

app.get("/docs/:page", (req, res) => {
    const pageNum = Number(req.params.page);
    const maxPageNumber = getDocsMaxPageNumber(routes);

    if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPageNumber) {
        return res.redirect("/error");
    }
    
    const routeKey = `docs${pageNum}Page`;
    res.send(routes[routeKey]);
});

app.get("/error", (req, res) => {
    res.send(routes.errorPage);
});

app.get("*", (req, res) => {
    res.redirect("/error");
});

app.post("/api/login", (req, res) => {
    let loginResult = login(req.body.username, req.body.password);
    res.send({ data: loginResult });
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start:", error);
        return;
    }
    console.log("Server started at port:", PORT);
});
