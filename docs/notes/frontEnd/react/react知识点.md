---
title: react知识点
date: 2019-11-06
---

问题 1：什么是虚拟 DOM？
:::tip
主题: React
难度: ⭐
:::
虚拟 DOM（vnode)是真实 DOM 在内存中的表示。UI 的表示形式保存在内存中，并与实际的 DOM 同步。这是一个在渲染函数被调用和元素在屏幕上显示之间的步骤，整个过程被称为调和。

问题 2：类组件和函数组件之间的区别是啥？
:::tip
主题: React
难度: ⭐⭐
:::

- 类组件：可以使用其他特性，如状态 state 和生命周期钩子。
- 函数组件： 当组件只是接受 props 渲染到页面时，就是无状态组件，也被称为哑组件或展示组件

区别：
函数组件的性能比类组件的性能更高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可，为了提高性能，尽量使用函数组件

| 区别             | 函数组件 | 类组件 |
| ---------------- | -------- | ------ |
| 是否有 this      | 没有     | 有     |
| 是否有生命周期   | 没有     | 有     |
| 是否有状态 state | 没有     | 有     |

问题 3：React 中 refs 干嘛用的？
:::tip
主题: React
难度: ⭐⭐
:::

Refs 提供了一种访问在 render 方法中创建的 DOM 节点或者 react 元素的方法。在典型的数据流中，props 是父子组件交互的唯一方式，想要修改子组件，需要使用新的 props 重新渲染它。凡事有例外，某些情况下需要在典型数据外，强制修改子代，这个时候可以使用 Refs

```js
class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value", this.input.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={input => (this.input = input)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

问题 4：在 React 中如何处理事件
:::tip
主题: React
难度: ⭐⭐
:::

为了解决跨浏览器的兼容性问题，SyntheticEvent 实例将被传递给你的时间处理函数，SyntheticEvent 是 react 跨浏览器的浏览器原生事件包装器，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation 和 preventDefault

问题 5：说说对 React Hooks 的理解

在 react 中我们一般有两种方式来创建组件，类定义或者函数定义；在类定义中我们可以使用许多 react 的特性，比如 state 或者各种生命周期钩子，但是在函数定义中却无法使用。所以 react16.8 版本中新推出了 react hooks 的功能，通通过 React Hooks 我们就可以在函数定义中来使用类定义当中才能使用的特性。当然 React Hooks 的出现本身也是为了组件复用，以及相比于类定义当中的生命周期钩子，React Hooks 中提供的 useEffect 将多个生命周期钩子进行结合，使得原先在类定义中分散的逻辑变得更加集中，方便维护和管理。

问题 6：React Hooks 当中的 useEffect 是如何区分生命周期钩子的

useEffect 可以看成是 componentDidMount，componentDidUpdate 和 componentWillUnmout 三者的结合。useEffect(callback, [source])接受两个参数，调用方式如下

```js
useEffect(() => {
  console.log("mounted");

  return () => {
    console.log("willUnmout");
  };
}, [source]);
```

生命周期函数的调用主要是通过第二个参数[source]来控制，有如下几种情况:
(1) [source]参数不传时，则每次都会优先调用上次保存的函数中返回的那个函数，然后再调用外部那个函数；
(2) [source]参数传[]时，则外部的函数只会在初始化时调用一次，返回的那个函数也只会最终在组件卸载时调用一次；
(3) [source]参数有值时，则只会监听到数组中的值发生变化后才优先调用返回的那个函数，再调用外部的函数。

问题 7：React 实现的移动应用中，如果出现卡顿，有哪些可以考虑的有啊方案

(1) 增加`shouldComponentUpdate`钩子对新旧`props`进行比较，如果值相同则阻止更新，避免不必要的渲染，或者使用`PureReactComponent`替代`Component`，其内部已经封装了`shouldComponentUpdate` 的浅比较逻辑；
(2) 对于列表或其他结构相同的节点，为其中的每一项增加唯一 `key` 属性，以方便 `React` 的 `diff` 算法中对该节点的复用，减少节点的创建和删除操作；
(3) `render` 函数中减少类似 `onClick={() => {doSomething()}}`的写法，每次调用 `render` 函数时均会创建一个新的函数，即使内容没有发生任何变化，也会导致节点没必要的重渲染，建议将函数保存在组件的成员对象中，这样只会创建一次；
(4) 组件的 `props` 如果需要经过一系列运算后才能拿到最终结果，则可以考虑使用 `reselect` 库对结果进行缓存，如果 `props` 值未发生变化，则结果直接从缓存中拿，避免高昂的运算代价；
(5) `webpack-bundle-analyzer` 分析当前页面的依赖包，是否存在不合理性，如果存在，找到优化点并进行优化。

问题 8：React 实现一个防抖的模糊查询输入框

```js
// 防抖函数
function debounce(fn, wait, immediate) {
  let timer = null;

  return function(...args) {
    let context = this;

    if (immediate && !timer) {
      fn.apply(context, args)
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait)
  }
}

class SearchInput extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.callAjax = debounce(this.callAjax, 500, true);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    this.callAjax();
  }

  callAjax() {
    console.log(this.state.value);
  }

  render() {
    return (<input type="text" value={this.state.value} onChange={this.hanleChange}>)
  }
}
```

问题：理解深拷贝和浅拷贝
:::tip
**浅拷贝**：是指创建一个对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，那么拷贝的就是基本类型的值，如果属性是引用类型，那么拷贝就是内存地址，所以如果其中一个对象修改了某些属性，那么另一个对象就会受到影响。
**深拷贝**：是指从内存中完整地拷贝一个对象出来，并在堆内存中为其分配一个新的内存区域来存放，并且修改该对象的属性不会影响到原来的对象

问题：深拷贝和浅拷贝的实现方式分别有哪些？
:::tip
**浅拷贝**：

- Object.assign
- 通过对象扩展运算符
- 通过数组的 slice 方法
- 通过数组的 concat
  **深拷贝**

- 通过 JSON.stringify 来序列化对象
- 手动实现递归

问题：手动实现一个 bind 方法

```js
Function.prototype.bind = function(context, ...args1) {
  if (typeof this !== "function") {
    throw new Error("not a function");
  }

  let fn = this;
  let resFn = function(...args2) {
    return fn.apply(
      this instanceof resFn ? this : context,
      args1.concat(args2)
    );
  };

  const DumpFunction = function DumpFunction() {};
  DumpFunction.prototype = this.prototype;
  resFn.prototype = new DumpFunction();

  return resFn;
};
```

问题：什么是高阶组件(HOC)

高阶组件(Higher order component)本身其实不是组件，而是一个函数，这个函数接受一个元组件作为参数，然后返回一个新的增强组件，高阶组件的出现本身也是为了逻辑复用

```js
// 例子
function withLoginAuth(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogin: false
      };
    }

    async componentDidMount() {
      const isLogin = await getLoginStatus();
      this.setState({ isLogin });
    }

    render() {
      if (this.state.isLogin) {
        return <WrapperComponent {...this.props} />;
      }

      return <div>您还未登录...</div>;
    }
  };
}
```

问题：手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，请求失败则继续请求指导超过最大次数

```js
function request(url, body, successCallback, errorCallback, maxCount = 3) {
  return fetch(url, body)
    .then(response => successCallback(response))
    .catch(err => {
      if (maxCount <= 0) return errorCallback("请求超时");
      return request(url, body, successCallback, errorCallback, --maxCount);
    });
}

// 调用
request(
  "https://some/path",
  { method: "GET", headers: {} },
  response => {
    console.log(response.json());
  },
  err => console.error(err)
);
```

问题：JS 中==和===的区别

`==`：表示抽象相等，两边值类型不同的时候，会先做隐式类型转换，再对值进行比较；
`===`：表示严格相等，不会做类型转换，两边的类型不同一定不相等

问题：GET 和 POST 的区别

:::tip
(1) GET 请求在浏览器回退和刷新时是无害的，而 POST 请求会告知用户数据会被重新提交；
(2) GET 请求可以收藏为书签，POST 请求不可以收藏为书签；
(3) GET 请求可以被缓存，POST 请求不可以被缓存，除非在响应头中包含合适的 Cache-Control/Expires 字段，但是不建议缓存 POST 请求，其不满足幂等性，每次调用都会对服务器资源造成影响；
(4) GET 请求一般不具有请求体，因此只能进行 url 编码，而 POST 请求支持多种编码方式。
(5) GET 请求的参数可以被保留在浏览器的历史中，POST 请求不会被保留；
(6) GET 请求因为是向 URL 添加数据，不同的浏览器厂商，代理服务器，web 服务器都可能会有自己的长度限制，而 POST 请求无长度限制；
(7) GET 请求只允许 ASCII 字符，POST 请求无限制，支持二进制数据；
(8) GET 请求的安全性较差，数据被暴露在浏览器的 URL 中，所以不能用来传递敏感信息，POST 请求的安全性较好，数据不会暴露在 URL 中；
(9) GET 请求具有幂等性(多次请求不会对资源造成影响)，POST 请求不幂等；
(10) GET 请求一般不具有请求体，请求中一般不包含 100-continue 协议，所以只会发一次请求，而 POST 请求在发送数据到服务端之前允许双方"握手"，客户端先发送 Expect:100-continue 消息，询问服务端是否愿意接收数据，接收到服务端正确的 100-continue 应答后才会将请求体发送给服务端，服务端再响应 200 返回数据。
:::

问题：说下浏览器的缓存机制

浏览器的缓存机制可分为强缓存和协商缓存，服务端可以在响应头中增加 Cache-Control/Expires 来为当前资源设置缓存有效期(Cache-Control 的 max-age 的优先级高于 Expires)，浏览器再次发送请求时，会先判断缓存是否过期，如果未过期则使用强缓存，直接使用浏览器的本地缓存资源，如果已过期则使用协商缓存，协商缓存大致有以下两种方案：
(1) 唯一标识：Etag(服务端响应携带) & If-None-Match(客户端请求携带)；
(2) 最后修改时间： Last-Modified(服务端响应携带) & If-Modified-Since (客户端请求携带) ，其优先级低于 Etag。
服务端判断值是否一致，如果一致，则直接返回 304 通知浏览器使用本地缓存，如果不一致则返回新的资源。

问题：CSS3 中 transition 和 animation 的属性分别偶哪些

`transition` 过渡动画：
(1) `transition-property`：属性名称
(2) `transition-duration`: 间隔时间
(3) `transition-timing-function`: 动画曲线
(4) `transition-delay`: 延迟
`animation` 关键帧动画：
(1) `animation-name`：动画名称
(2) `animation-duration`: 间隔时间
(3) `animation-timing-function`: 动画曲线
(4) `animation-delay`: 延迟
(5) `animation-iteration-count`：动画次数
(6) `animation-direction`: 方向
(7) `animation-fill-mode`: 禁止模式

问题：盒模型

页面在渲染时，DOM 元素所采用的布局模型，一个元素占用的空间大小由几个部分组件，内容（content)、内边距（padding）、边框（border)和外边距（margin)。可以用个`box-sizing`来设置，其中 IE 盒模型的`content`包含了`padding`和 b`border`，这是区别于 W3C 标准盒模型的地方

问题：选择器优先级

!import > 行内样式 style > id 选择器 > class 选择器 > 标签选择器> \* > 继承 > 默认

问题：forEach，map 和 filter 的区别

`forEach` 遍历数组，参数为一个回调函数，回调函数接收三个参数，当前元素，元素索引，整个数组；
`map` 与 `forEach` 类似，遍历数组，但其回调函数的返回值会组成一个新数组，新数组的索引结构和原数组一致，原数组不变；
`filter` 会返回原数组的一个子集，回调函数用于逻辑判断，返回 true 则将当前元素添加到返回数组中，否则排除当前元素，原数组不变。

问题：实现函数柯里化

```js
const curry = (fn, ...args1) => (...args2) =>
  (arg => (arg.length === fn.length ? fn(...arg) : curry(fn, ...arg)))([
    ...args1,
    ...args2
  ]);

// 调用
const foo = (a, b, c) => a * b * c;
curry(foo)(2, 3, 4); // -> 24
curry(foo, 2)(3, 4); // -> 24
curry(foo, 2, 3)(4); // -> 24
curry(foo, 2, 3, 4)(); // -> 24
```

问题：跨标签页的通讯方式有哪些

(1) BroadCast Channel
(2) Service Worker
(3) LocalStorage + window.onstorage 监听
(4) Shared Worker + 定时器轮询(setInterval)
(5) IndexedDB + 定时器轮询(setInterval)
(6) cookie + 定时器轮询(setInterval)
(7) window.open + window.postMessage
(8) Websocket

问题：实现一个函数判断数据类型

```js
function getType(obj) {
  if (obj === null) return String(obj);
  return typeof obj === "object"
    ? Object.prototype.toString
        .call(obj)
        .replace("[object ", "")
        .toLowerCase()
    : typeof obj;
}

// 调用
getType(null); // -> null
getType(undefined); // -> undefined
getType({}); // -> object
getType([]); // -> array
getType(123); // -> number
getType(true); // -> boolean
getType("123"); // -> string
getType(/123/); // -> regexp
getType(new Date()); // -> date
```

问题：手动实现 Promise，写出伪代码

需要遵循 Promise/A+规范：
（1）一个 promise 必须具备三种专题 pending/fulfilled(resolved)/rejected，当处于 pending 状态时，可以转移到 fulfilled(resolved)状态或 rejected 状态，处于 fulfilled(resolved)状态或 rejected 状态，状态不再可变；
（2）一个 promise 必须有 then 方法，then 方法必须接受两个参数

```js
// onFulfilled 在状态由 pending -> fulfilled(resolved) 时执行，参数为 resolve()中传递的值
// onRejected 在状态由 pending -> rejected 时执行，参数为 reject()中传递的值
promise.then(onFulfilled, onRejected);
```

(3) then 方法必须返回一个 promise：

```js
promise2 = promise1.then(onFulfilled, onRejected);
```

```js
function myPromise(constructor) {
  let self = this;
  self.status = "pending"; //定义状态改变前的初始状态
  self.value = undefined; //定义状态为resolved的时候的状态
  self.reason = undefined; //定义状态为rejected的时候的状态
  self.onFullfilledArray = [];
  self.onRejectedArray = [];
  function resolve(value) {
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
      self.onFullfilledArray.forEach(function(f) {
        f(self.value);
        //如果状态从pending变为resolved，
        //那么就遍历执行里面的异步方法
      });
    }
  }
  function reject(reason) {
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
      self.onRejectedArray.forEach(function(f) {
        f(self.reason);
        //如果状态从pending变为rejected，
        //那么就遍历执行里面的异步方法
      });
    }
  }
  //捕获构造异常
  try {
    constructor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function(onFullfilled, onRejected) {
  let self = this;
  let promise2;
  switch (self.status) {
    case "pending":
      promise2 = new myPromise(function(resolve, reject) {
        self.onFullfilledArray.push(function() {
          setTimeout(function() {
            try {
              let temple = onFullfilled(self.value);
              resolvePromise(temple);
            } catch (e) {
              reject(e); //error catch
            }
          });
        });
        self.onRejectedArray.push(function() {
          setTimeout(function() {
            try {
              let temple = onRejected(self.reason);
              resolvePromise(temple);
            } catch (e) {
              reject(e); // error catch
            }
          });
        });
      });
    case "resolved":
      promise2 = new myPromise(function(resolve, reject) {
        setTimeout(function() {
          try {
            let temple = onFullfilled(self.value);
            //将上次一then里面的方法传递进下一个Promise状态
            resolvePromise(temple);
          } catch (e) {
            reject(e); //error catch
          }
        });
      });
      break;
    case "rejected":
      promise2 = new myPromise(function(resolve, reject) {
        setTimeout(function() {
          try {
            let temple = onRejected(self.reason);
            //将then里面的方法传递到下一个Promise的状态里
            resolvePromise(temple);
          } catch (e) {
            reject(e);
          }
        });
      });
      break;
    default:
  }
  return promise2;
};

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    throw new TypeError("type error");
  }
  let isUsed;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        //是一个promise的情况
        then.call(
          x,
          function(y) {
            if (isUsed) return;
            isUsed = true;
            resolvePromise(promise, y, resolve, reject);
          },
          function(e) {
            if (isUsed) return;
            isUsed = true;
            reject(e);
          }
        );
      } else {
        //仅仅是一个函数或者是对象
        resolve(x);
      }
    } catch (e) {
      if (isUsed) return;
      isUsed = true;
      reject(e);
    }
  } else {
    //返回的基本类型，直接resolve
    resolve(x);
  }
}
```

问题：说出几种数去重的方式

```js
let arr = [1, 2, 3, 4, 5, 3, 2, 4, 1];

// 1
const res = Array.from(new Set(arr));

//2
const res = [];
const map = new Map();
for (let v of arr) {
  if (!map.has(v)) {
    map.set(v, true);
    res.push(v);
  }
}

// 3
const res = [];
for (let v of arr) {
  if (!res.includes(v)) {
    res.push(v);
  }
}

// 4
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--;
    }
  }
}

// 5
const obj = {};
const res = arr.filter(item =>
  obj.hasOwnProperty(typeof item + item)
    ? false
    : (obj[typeof item + item] = true)
);
```

问题：对象数组如何去重？

```js
const list = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 5 },
  { id: 4, a: 4 }
];

const res = list.reduce((acc, cur) => {
  const ids = acc.map(item => item.id);
  return ids.includes(cur.id) ? acc : [...acc, cur];
});
```

问题：说出一下代码的执行结果

```js
var a = 10;
var obj = {
  a: 20,
  say: function() {
    console.log(this.a);
  }
};
obj.say();
```

答案为 20。然后面试官继续追问，如何才能打印出 10，给出如下方式：

```js
// 方式1
var a = 10;
var obj = {
  a: 20,
  say: () => {
    // 此处改为箭头函数
    console.log(this.a);
  }
};
obj.say(); // -> 10

// 方式2
var a = 10;
var obj = {
  a: 20,
  say: function() {
    console.log(this.a);
  }
};
obj.say.call(this); // 此处显示绑定this为全局window对象

// 方式3
var a = 10;
var obj = {
  a: 20,
  say: function() {
    console.log(this.a);
  }
};

var say = obj.say; // 此处先创建一个临时变量存放函数定义，然后单独调用
say();
```

问题：复制指定文字到剪切板

```js
function copy(text, callback) {
  if (document.execCommand("Copy")) {
    //创建input
    var inputZ = document.createElement("input");
    //添加Id,用于后续操作
    inputZ.setAttribute("id", "inputCopy");
    //获取传入的值
    inputZ.value = text;
    //创建的input添加到body
    document.body.appendChild(inputZ);
    //选中input中的值(使用前面的Id)
    document.getElementById("inputCopy").select();
    //把值复制下来
    document.execCommand("Copy");
    alert("複製成功");
    //删除添加的input
    document.body.removeChild(inputZ);
    // 成功回調1
    callback(1);
  } else {
    // 失敗回調2
    callback(2);
  }
}

//必须在触发事件中调用(如点击事件)
copy("www.supersjz.cn", function(type) {
  if (type == 1) {
    console.log("复制成功");
  }
});
```

问题：笛卡尔乘积

```js
// 笛卡尔乘积(函ES6语法)

/**
 * 参数
 * 单维数组结构['红','蓝']
 * 多维数组结果['红','蓝'],['大号','小号'],['圆形','方形']
 */
function descartes(arr) {
  // 判断是否多维数组结构
  if (typeof arr[0] === "object") {
    return [].reduce.call(arr, function(col, set) {
      let res = [];
      col.forEach(c => {
        set.forEach(s => {
          let t = [].concat(Array.isArray(c) ? c : [c]);
          t.push(s);
          res.push(t);
        });
      });
      return res;
    });
  } else {
    return arr;
  }
}

var list = [["红", "蓝"], ["大号", "小号"], ["圆形", "方形"]];
var descartList = descart(list);
console.log(descartList);
//["红色", "大号", "圆形"]
// ["红色", "大号", "方形"]
// ["红色", "小号", "圆形"]
// ["红色", "小号", "方形"]
// ["蓝色", "大号", "圆形"]
// ["蓝色", "大号", "方形"]
// ["蓝色", "小号", "圆形"]
// ["蓝色", "小号", "方形"]

//笛卡尔乘积(原生JS)

/**
 * 参数：
 * 单维数组结构 ["红色","蓝色"]
 * 多维数组结构 [["红色","蓝色"],["大号","小号"],["圆形","方形"]]
 */
function descartes(list){
  var point = {};
  var result = [];
  var pIndex = null;
  var tempCount = 0;
  var temp  = [];
  for(var index in list){
    if(typeof list[index] == 'object'){
      point[index] = {'parent':pIndex,'count'
      pIndex = index;
    }
  }
  //单维度数据结构直接返回
  if(pIndex == null){
    return list;
  }
  //动态生成笛卡尔积
  while(true){
    for(var index in list){
      tempCount = point[index]['count'];
      temp.push(list[index][tempCount]);
    }
    result.push(temp);
    temp = [];
    while(true){
      if(point[index]['count']+1 >= list[inde
    point[index]['count'] = 0;
    pIndex = point[index]['parent'];
    if(pIndex == null){
      return result;
    }
    index = pIndex;
      }else{
    point[index]['count']++;
    break;
      }
    }
  }
}
var list = [["红色","蓝色"],["大号","小号"],["圆形","方形"]]
var descartesList = descartes(list)
console.log(descartesList)

```
