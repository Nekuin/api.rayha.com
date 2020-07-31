const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Räyhästöliitto");
});

app.get("/is-one", (req, res) => {
    const date = new Date();
    if (date.getHours() == 1) {
        res.send("Ei vittu kello on 1");
    } else {
        res.send("Eipä ollu");
    }
});

app.listen(port, () => console.log("Listening to port", port));
