//@flow
import axios from "axios";
var AxiosData = {
  getData: (url, callBack, token, objectId, extraId, detailCallBack) => {
    axios({
      url: url,
      method: "get",
      headers: { Authorization: token }
    })
      .then(res => {
        if (res.status == "401") {
          window.parent.postMessage({ status: "401" }, "*");
          return;
        }
        callBack(res.data, objectId, extraId, detailCallBack);
      })
      .catch(err => {
        console.log(err);
      });
  },
  postData: (url, data, callBack, token, objectId, areaId) => {
    axios({
      url: url,
      method: "post",
      data: data,
      headers: {
        Authorization: token,
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
      .then(res => {
        if (res.status == "401") {
          window.parent.postMessage({ status: "401" }, "*");
          return;
        }
        callBack(res.data, objectId, areaId);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  postDataupload: (url, data, callBack, token, objectId, areaId) => {
    axios({
      url: url,
      method: "post",
      data: data,
      accept: 'text/plain',
      processData: false,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        if (res.status == "401") {
          window.parent.postMessage({ status: "401" }, "*");
          return;
        }
        callBack(res.data, objectId, areaId);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  deleteData: (url, data, callBack, token, objectId, areaId) => {
    axios({
      url: url,
      method: "delete",
      data: data,
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        if (res.status == "401") {
          window.parent.postMessage({ status: "401" }, "*");
          return;
        }
        callBack(res.data, objectId, areaId);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  putData: (url, data, callBack, token, objectId) => {
    axios({
      url: url,
      method: "PUT",
      data: data,
      headers: {
        Authorization: token
      }
    })
      .then(res => {
        if (res.status == "401") {
          window.parent.postMessage({ status: "401" }, "*");
          return;
        }
        callBack(res.data, objectId);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
export default AxiosData;
