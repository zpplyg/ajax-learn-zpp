const express = require("express");
const app = express();
const users = require("./users.js");
let dataSource = Object.assign([], users);
app.get("/getMSG", (req, res) => {
  /**在react中使用axios更加的简便！！！！！ */
  let html = `在react中使用axios更加的简便！！！！！`;
  res.send(html);
});
app.get("/getSimpleList", (req, res) => {
  let array = `[1,2,3,4,5,6,7]`;
  res.send(array);
});
app.all("/getUserList", (req, res) => {
  res.send(dataSource);
});
app.get("/deleteUser", (req, res) => {
  let { id } = req.query;
  dataSource = dataSource.filter(i => i.id != id);
  res.send("delete success");
});


app.listen(3006, () => console.log("Example app listening on port 3006!"));
