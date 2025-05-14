import express from "express";
import appTest from "./routes/routeTest.js";
const app = express();

const getco = (req, res) => {
    res.status(200).json({ msg: "hallo" });
};
app.use(express.json());
app.use(appTest);

app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server running on port 8000");
    }
});
