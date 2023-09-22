import express from "express";
const app = express();
import path from "path";
import { login } from "./utils/login.js"

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/home/home.html"));
});

app.get("/nodejs", (req, res) => {
    res.sendFile(path.resolve("./public/nodejs/nodejs.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.resolve("./public/admin/admin.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./public/login/login.html"));
});

app.get("/doc/:page", (req, res) => {
    const pageNum = Number(req.params.page);
    if (!pageNum) {
        res.send({ error: "The page number must be a number!" });
        return;
    }
    res.sendFile(path.resolve(`./public/documentation/doc${pageNum}.html`));
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
