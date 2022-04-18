const express = require("express");
const minPrefix = require("./minPrefix");
const app = express();
const port = 4000

const checkWords = ["bonfire", "cardio", "case", "character", "bonsai"];

app.get("/prefixes", (req, res) => {
  const words = req.query.keywords.split(",");
  let returnData = [];

  words.forEach((word) => {
    const checkWordObject =
      checkWords.indexOf(word) > -1
        ? {
            keyword: word,
            status: "found",
            prefix: minPrefix(word, checkWords)
          }
        : { keyword: word, status: "not_found", prefix: "not_applicable" };
    returnData = [...returnData, checkWordObject];
  });
  res.send(returnData);
});

app.listen(port, () => {
  console.log(`Server running successfully ${port}`);
});
