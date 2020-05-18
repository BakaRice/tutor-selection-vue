import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

// 通用的，将{}占位符的字符串路径，转为正则表达式对象
// 例如，/users/{uid}; /users/{uid}/homeworks/{hid}
function path(p) {
  let reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}

mock.onGet(path("users/{uid}")).reply(200, {
  user: { userId: 2, userName: "SUN" }
});

// config，axios config对象。包含请求信息
// 返回数组，[status, {data对象}, {header对象}]
mock.onPost("login").reply(c => {
  // 此时请求的json已经转为字符串，不是json对象。因此需要转换回
  let data = c.data;
  let user = JSON.parse(data);
  let result = [401, { message: "用户名密码错误" }];
  if (user.number == "1001" && user.password == "123456") {
    result = [
      200,
      {
        role: "6983f953b49c88210cb9"
      },
      {
        authorization: "65a1c6a5ca65c1a65a1c6a5ca65c1a65a1c6a5ca65c1a"
      }
    ];
  }
  return result;
});

// 模拟加密的token被篡改
mock.onGet("index").reply(c => {
  console.log("mock onget index");
  let result = [403, { message: "无权限" }];
  let auth = c.headers["authorization"];
  if (auth == "65a1c6a5ca65c1a65a1c6a5ca65c1a65a1c6a5ca65c1a") {
    result = [
      200,
      {
        user: { name: "Tan", number: "1001" }
      }
    ];
  }
  console.log("mock onget index before return ");
  return result;
});
