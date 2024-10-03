const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("questions/home.ejs");
});

let answers = [];

app.get("/questions/1", (req, res) => {
    res.render("questions/question1.ejs");
});

app.post("/questions/1", (req, res) => {
    let answer = parseInt(req.body.question1);
    console.log(answer);
    if (answer) {
        switch (answer) {
            case 1:
                answers.push(1.5);
                break;
            case 2:
                answers.push(1.7);
                break;
            case 3:
                answers.push(2.1);
                break;
            case 4:
                answers.push(2.3);
                break;
            default:
                answers.push(0);
                break;
        }
    }
    res.redirect("/questions/2");
});

app.get("/questions/2", (req, res) => {
    res.render("questions/question2.ejs");
});

app.post("/questions/2", (req, res) => {
    let answer = parseInt(req.body.question2);
    console.log(answer);
    if (answer) {
        switch (answer) {
            case 1:
                answers.push(1.5);
                break;
            case 2:
                answers.push(2.2);
                break;
            default:
                answers.push(0);
                break;
        }
    }
    res.redirect("/questions/3");
});

app.get("/questions/3", (req, res) => { 
    res.render("questions/question3.ejs");
});

app.post("/questions/3", (req, res) => {
    let answer = parseInt(req.body.housing);
    console.log(answer);
    if (answer) {
        switch (answer) {
            case 1:
                answers.push(2.2);
                break;
            case 2:
                answers.push(2);
                break;
            case 3:
                answers.push(1.6); 
                break;
            case 4:
                answers.push(1.3);
                break;
            default:
                answers.push(0);
                break;
        }
    }
    res.redirect("/questions/4");
});

app.get("/questions/4", (req, res) => {
    res.render("questions/question4.ejs");
});

app.post("/questions/4", (req, res) => {
    let answer = parseInt(req.body.question4);
    console.log(answer);
    if (answer) {
        switch (answer) {
            case 1:
                answers.push(2.1);
                break;
            case 2:
                answers.push(1.8);
                break;
            case 3:
                answers.push(1.5);
                break;
            default:
                answers.push(0);
                break;
        }
    }
    res.redirect("/questions/5");
});

app.get("/questions/5", (req, res) => {
    res.render("questions/question5.ejs");
});

app.post("/questions/5", (req, res) => {
    let answer = parseInt(req.body.transport);
    console.log(answer);
    if (answer) {
        switch (answer) {
            case 1:
                answers.push(2.2);
                break;
            case 2:
                answers.push(1.9);
                break;
            case 3:
                answers.push(1.5);
                break;
            default:
                answers.push(0);
                break;
        }
    }
    res.redirect("/questions/6");
});

app.get("/questions/6", (req, res) => {
    res.render("questions/question6.ejs");
});

app.post("/questions/6", (req, res) => {
    let answer = parseInt(req.body.question6);
    console.log(answer);
    if (answer) {
        switch (answer) {
            case 1:
                answers.push(1.5);
                break;
            case 2:
                answers.push(1.9);
                break;
            case 3:
                answers.push(2.3);
                break;
            default:
                answers.push(0);
                break;
        }
    }
    res.redirect("/results");
});

app.get("/results", (req, res) => {
    res.render("questions/results.ejs", { answers });
    answers = [];
});

app.get("/solution/:id", (req, res) => {
    let id = req.params.id;
    res.render("questions/solution" + id + ".ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
