import express from "express";

const data = async (req, res) => {
   await res.send("hallo")
};

const app = express.Router();

app.get("/", data);

export default app;
