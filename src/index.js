const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 4545;

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
    res.json({ name: "Muthu", parameter: "Hi bro, I'm Muthu Kumaran" });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
