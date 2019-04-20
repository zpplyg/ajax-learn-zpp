const express = require("express");
const app = express();

/**在react中使用axios更加的简便！！！！！ */
let html = `在react中使用axios更加的简便！！！！！`;
app.get("/getMSG", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.send(html);
});

app.listen(3006, () => console.log("Example app listening on port 3006!"));
