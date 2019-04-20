/**
 * 对原生的xhr请求进行的简单封装
 * @param {方法名} method
 * @param {URL} url
 * @param {参数，json格式} postData
 * @param {成功之后的回调，参数：成功之后后端返回的数据} onSuccess
 * @param {失败之后的回调，参数：失败时候的错误信息} onError
 */
function fetchData(method, url, postData, onSuccess, onError) {
  axios({
    method: method,
    url: url,
    data: postData
  })
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
