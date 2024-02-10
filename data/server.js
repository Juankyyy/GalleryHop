
// servidor con express

const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get("/", (req, rest) => {
    rest.send("Hello word");
});

app.post("/upload", (req, rest) => {
    console.log(req.files.file);
    rest.send("upload file");
});

app.listen(3001, () => {
    console.log("server runnig");
});