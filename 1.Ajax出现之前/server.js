const express = require("express");
const app = express();
/**前后端分离之前，都是由后端直接生成html代码返回给浏览器的所以初期的页面很丑 */
let msg = `前后端分离之前，都是由后端直接生成html代码返回给浏览器的所以初期的页面很丑`;
let html = `<div style='color:blue;width:200px;height:100px;border:1px  dashed #333;'>${msg}</div>`;
app.get("/", (req, res) => res.send(html));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
