const express = require("express");

const {
    add,
    subtract,
    multiply,
    divide
} = require("./calculator");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Calculator API is running"
    });
});

app.get("/add", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        result: add(a, b)
    });
});

app.get("/subtract", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        result: subtract(a, b)
    });
});

app.get("/multiply", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    res.json({
        result: multiply(a, b)
    });
});

app.get("/divide", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    try {
        res.json({
            result: divide(a, b)
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Calculator API running on port 3000");
});