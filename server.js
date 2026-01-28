const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let data = {};

app.post("/save", (req, res) => {
    const { classe, eleve, stats } = req.body;
    data[classe] = data[classe] || {};
    data[classe][eleve] = stats;
    res.send({ status: "ok" });
});

app.get("/teacher/:classe", (req, res) => {
    res.json(data[req.params.classe] || {});
});

app.listen(3000, () => console.log("Serveur lancé"));
