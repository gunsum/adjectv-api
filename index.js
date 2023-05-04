const express = require("express");
const app = express();
const cors = require("cors");
const port = 3010;

const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/adjective", async (req, res) => {
    try {
      const { adj } = req.body;
      const newAdjective = await pool.query(
        "INSERT INTO adjective (adj) VALUES($1) RETURNING *",
        [adj]
      );
      res.json(newAdjective.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


app.get("/adjective", async (req, res) => {
    try {
      const selectAdjective = await pool.query(
        "SELECT *FROM adjective ORDER BY RANDOM() LIMIT 1"
      );
  
      res.json(selectAdjective.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));