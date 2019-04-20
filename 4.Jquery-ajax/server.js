const express = require("express");
const app = express();
/**
 * 服务器的静态目录，也就是初期前端工作的目录
 */
app.use(express.static("static"));
/**使用jquery很方便的实现ajax请求！！！！ */
let html = `使用jquery很方便的实现ajax请求！！！！`;
app.get("/getMSG", (req, res) => res.send(html));

app.listen(3003, () => console.log("Example app listening on port 3003!"));
