import express from "express";
import barang from "./models/barangModel.js";
import barang_Route from "./routes/barangRoute.js"

const app = express();

// (async() => {
//     await barang.sync()
// })()

app.use(express.json());
app.use(barang_Route)


app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server running on port 8000");
    }
});
