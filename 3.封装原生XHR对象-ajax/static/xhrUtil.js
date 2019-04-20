/**
 * 对原生的xhr请求进行的简单封装
 * @param {方法名} method 
 * @param {URL} url 
 * @param {参数，json格式} postData 
 * @param {成功之后的回调，参数：成功之后后端返回的数据} onSuccess 
 * @param {失败之后的回调，参数：失败时候的错误信息} onError 
 */
function fetchData(method, url,postData, onSuccess, onError) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  // 接收返回值
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        var msg = xhr.responseText;
        if (onSuccess) {
          onSuccess(msg);
        }
      } else {
        if (onError) {
          onError(msg);
        }
      }
    }
  };
  // 处理请求参数
  postData = (function(value) {
    var oStr = "";
    for (var key in value) {
      oStr += key + "=" + value[key] + "&";
    }
    return oStr;
  })(postData);
  // 设置请求头
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // 异常处理
  xhr.onerror = function(err) {
    if (onError) {
      onError(err);
    }
  };
  // 跨域携带cookie
  xhr.withCredentials = true;
  // 发出请求
  xhr.send(postData);
}
