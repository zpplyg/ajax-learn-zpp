import axios from "axios";
import queryString from "query-string";
let baseURL = "/api";
if (process.env.NODE_ENV === "production") {
  baseURL = "";
}

/**
 * 对原生的xhr请求进行的简单封装
 * @param {方法名} method
 * @param {URL} url
 * @param {参数，json格式} postData
 * @param {成功之后的回调，参数：成功之后后端返回的数据} onSuccess
 * @param {失败之后的回调，参数：失败时候的错误信息} onError
 */
export default function fetchData(method, url, postData, onSuccess, onError) {
  let obj = { method: method, url: baseURL + url };
  if (method == "get") {
    obj.params = postData;
  } else {
    obj.data = queryString.stringify(postData);
  }
  axios(obj)
    .then(function(response) {
      if (onSuccess) {
        onSuccess(response.data);
      }
    })
    .catch(function(error) {
      if (onError) {
        onError(error);
      }
    });
}
