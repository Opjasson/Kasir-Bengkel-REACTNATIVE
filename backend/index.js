import express from "express";

const app = express();

app.use(express.json());


app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server running on port 8000");
    }
});
