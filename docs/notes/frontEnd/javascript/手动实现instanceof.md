---
title: 手动实现instanceof
date: 2019-09-03
---

## 原理

a instanceof Object
判断Object的prototype是否在a的原型链上。

## 实现

```js
    function myInstanceof(target, origin) {
      const proto = target.__proto__;
      if (proto) {
        if (origin.prototype === proto) {
          return true;
        } else {
          return myInstanceof(proto, origin)
        }
      } else {
        return false;
      }
    }
```
