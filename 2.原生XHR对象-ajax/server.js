const express = require("express");
const app = express();
/**
 * 服务器的静态目录，也就是初期前端工作的目录
 */
app.use(express.static("static"));
/**前后端分离之后，后端只负责组建数据，组装dom的工作交给了前端 */
let html = `前后端分离之后，后端只负责组建数据，组装dom的工作交给了前端,本实例使用原生的xhr对象请求`;
app.get("/getMSG", (req, res) => res.send(html));

app.listen(3001, () => console.log("Example app listening on port 3001!"));
