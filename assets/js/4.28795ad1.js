(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{238:function(v,t,_){v.exports=_.p+"assets/img/7.6f6fd5b5.png"},239:function(v,t,_){v.exports=_.p+"assets/img/8.16679caa.png"},240:function(v,t,_){v.exports=_.p+"assets/img/9.16679caa.png"},241:function(v,t,_){v.exports=_.p+"assets/img/10.70dab6d5.png"},242:function(v,t,_){v.exports=_.p+"assets/img/11.70dab6d5.png"},243:function(v,t,_){v.exports=_.p+"assets/img/12.148ab934.png"},244:function(v,t,_){v.exports=_.p+"assets/img/13.4499380d.png"},245:function(v,t,_){v.exports=_.p+"assets/img/dns.1c292193.png"},246:function(v,t,_){v.exports=_.p+"assets/img/cdn.2c8806d6.png"},247:function(v,t,_){v.exports=_.p+"assets/img/34.bd31bc79.png"},358:function(v,t,_){"use strict";_.r(t);var a=_(27),e=Object(a.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"应用缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用缓存"}},[v._v("#")]),v._v(" 应用缓存")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("什么是引用程序缓存\nHTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问")])]),v._v(" "),a("li",[a("p",[v._v("应用缓存的优势：\n1）离线浏览——用户可在应用离线时使用它们\n2）速度——已缓存资源加载得更快\n3）减少服务器负载——浏览器将只从服务器下载更新过或更改过的资源")])]),v._v(" "),a("li",[a("p",[a("code",[v._v('<html manifest=".appcache">')]),v._v("增加 manifest 属性")])]),v._v(" "),a("li",[a("p",[v._v("mainfest 文件\n1）CACHE MANIFEST 标题下列出的文件将在首次下载后进行缓存\n2）NETWORK 标题下列出的文件需要与服务器的连接，且不会被缓存\n3）FALLBACK 标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）")])])]),v._v(" "),a("h2",{attrs:{id:"浏览器缓存机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制"}},[v._v("#")]),v._v(" 浏览器缓存机制")]),v._v(" "),a("p",[v._v("缓存是浏览器的一种机制，可以把请求过的 web 资源（html、css、js、图片等）拷贝一份副本存储在浏览器中，并根据请求配置选择是否使用该副本。")]),v._v(" "),a("h2",{attrs:{id:"缓存作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存作用"}},[v._v("#")]),v._v(" 缓存作用")]),v._v(" "),a("ol",[a("li",[v._v("减少网络带宽消耗")]),v._v(" "),a("li",[v._v("降低服务器压力")]),v._v(" "),a("li",[v._v("减少网络延迟，使页面的打开速度更快，增加用户体验")]),v._v(" "),a("li",[v._v("加快页面打开速度")]),v._v(" "),a("li",[v._v("降低服务器眼里")]),v._v(" "),a("li",[v._v("减少网络损耗")])]),v._v(" "),a("p",[v._v("根据不同的划分规则，缓存可以分为以下几种：\n"),a("img",{attrs:{src:_(238),alt:"浏览器缓存划分规则"}})]),v._v(" "),a("h2",{attrs:{id:"浏览器缓存规则定义位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存规则定义位置"}},[v._v("#")]),v._v(" 浏览器缓存规则定义位置")]),v._v(" "),a("p",[v._v("可以在 HTTP 协议头 和 HTML 页面的 meta 标签 中定义。")]),v._v(" "),a("p",[v._v("强制不使用缓存刷新：ctrl+f5")]),v._v(" "),a("p",[v._v("meta 标签定义：")]),v._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("--")]),v._v(" Pragma 是 http1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),v._v(" 版本中给客户端设定缓存方式之一 "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("meta http"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[v._v('"Pragma"')]),v._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[v._v('"no-cache"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("p",[v._v("上述代码的含义：浏览器当前页面不被缓存，每次访问都向服务器请求。")]),v._v(" "),a("p",[v._v("no-cache 不是不缓存，是可以缓存，但每次都要去服务端确认下缓存的内容是否是最新的，是就返回 304，不是就返回 200，还是罪行的内容（误区）")]),v._v(" "),a("p",[v._v("http 协议头定义：")]),v._v(" "),a("p",[v._v("与缓存有关的消息报头有 "),a("code",[v._v("expires")]),v._v("、"),a("code",[v._v("cache-control")]),v._v("——本地缓存阶段，"),a("code",[v._v("Last-Modified")]),v._v("、"),a("code",[v._v("If-modified-since")]),v._v("，"),a("code",[v._v("Etag")]),v._v("，"),a("code",[v._v("If-none-match")]),v._v("——协商缓存 等。")]),v._v(" "),a("h2",{attrs:{id:"缓存分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存分类"}},[v._v("#")]),v._v(" 缓存分类")]),v._v(" "),a("p",[v._v("根据是否需要向服务器发送资源请求，分为"),a("strong",[v._v("强缓存")]),v._v("和"),a("strong",[v._v("协商缓存")]),v._v("。")]),v._v(" "),a("p",[v._v("强缓存: 意味着强制使用缓存;")]),v._v(" "),a("p",[v._v("协商缓存: 意味着每用一次缓存都要协商一次。 强缓存和协商缓存都允许使用情况下，优先强缓存。")]),v._v(" "),a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[v._v("#")]),v._v(" 强缓存")]),v._v(" "),a("p",[v._v("强缓存的控制字段：")]),v._v(" "),a("p",[v._v("HTTP1.0："),a("code",[v._v("Expires")])]),v._v(" "),a("p",[v._v("HTTP1.1 ："),a("code",[v._v("Cache-Control")])]),v._v(" "),a("p",[v._v("判断过程：请求再次发起 -> 浏览器根据 "),a("code",[v._v("expires")]),v._v(" 和 "),a("code",[v._v("cache-control")]),v._v(' 判断目标资源是否命中"强缓存" -> 若命中，直接从缓存获取资源，不再与服务器发生通讯。')]),v._v(" "),a("p",[v._v("如果 "),a("code",[v._v("cache-control")]),v._v(" 与 "),a("code",[v._v("expires")]),v._v(" 同时存在，以 "),a("code",[v._v("cache-control")]),v._v(" 为主，继续使用 "),a("code",[v._v("expires")]),v._v(" 的目的就是向下兼容。")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),a("p",[a("code",[v._v("Expire")]),v._v(" 已经被 "),a("code",[v._v("Cache-Control")]),v._v(" 替代，原因在于 "),a("code",[v._v("Expires")]),v._v(" 依赖于本地时间，它控制缓存的原理是使用客户端的时间与服务端返回的时间做对比，那么如果客户端与服务端的时间因为某些原因（例如时区不同；客户端和服务端有一方的时间不准确；用户修改了本地时间）发生误差，那么强制缓存则会直接失效。")])]),v._v(" "),a("p",[a("code",[v._v("Cache-Control")]),v._v(" 取值：")]),v._v(" "),a("p",[v._v("在 HTTP/1.1 中，"),a("code",[v._v("Cache-Control")]),v._v(" 是最重要的规则，主要用于控制网页缓存，主要取值为：")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("public")]),v._v("：所有内容都将被缓存（客户端和代理服务器都可缓存）")]),v._v(" "),a("li",[a("code",[v._v("private")]),v._v("：所有内容只有客户端可以缓存，Cache-Control 的默认取值")]),v._v(" "),a("li",[a("code",[v._v("no-cache")]),v._v("：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定")]),v._v(" "),a("li",[a("code",[v._v("no-store")]),v._v("：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存")]),v._v(" "),a("li",[a("code",[v._v("max-age=xxx")]),v._v(" (xxx is numeric)：缓存内容将在 xxx 秒后失效")]),v._v(" "),a("li",[a("code",[v._v("must-revalidate")]),v._v(": 强制浏览器严格遵守你设置的 cache 规则")]),v._v(" "),a("li",[a("code",[v._v("proxy-revalidate")]),v._v(": 强制 proxy 严格遵守你设置的 cache 规则")])]),v._v(" "),a("p",[v._v("强缓存流程：\n"),a("img",{attrs:{src:_(239),alt:"强缓存流程"}}),v._v(" "),a("img",{attrs:{src:_(240),alt:"强缓存流程"}})]),v._v(" "),a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[v._v("#")]),v._v(" 协商缓存")]),v._v(" "),a("p",[v._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况： 协商缓存生效，返回 304 && 协商缓存失效，返回 200 和请求结果。")]),v._v(" "),a("p",[v._v("协商缓存流程：\n"),a("img",{attrs:{src:_(241),alt:"协商缓存"}}),v._v(" "),a("img",{attrs:{src:_(242),alt:"协商缓存"}})]),v._v(" "),a("p",[v._v("协商缓存的控制字段：")]),v._v(" "),a("p",[v._v("HTTP1.0："),a("code",[v._v("Last-Modified")]),v._v(" && "),a("code",[v._v("If-Modified-Since")]),v._v("\nHTTP1.1 ："),a("code",[v._v("Etag")]),v._v(" && "),a("code",[v._v("If-None-Match")])]),v._v(" "),a("h3",{attrs:{id:"last-modified-与-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-与-if-modified-since"}},[v._v("#")]),v._v(" "),a("code",[v._v("Last-Modified")]),v._v(" 与 "),a("code",[v._v("If-Modified-Since")])]),v._v(" "),a("p",[a("code",[v._v("Last-Modified")]),v._v(" 是服务器响应请求时，返回该资源文件在服务器最后被修改的时间")]),v._v(" "),a("p",[v._v("流程：")]),v._v(" "),a("ol",[a("li",[v._v("首次请求")]),v._v(" "),a("li",[v._v("服务器告知启用协商缓存规则，并在响应头中带上 "),a("code",[v._v("Last-Modified")]),v._v("，告知缓存到期时间")]),v._v(" "),a("li",[v._v("随后的每次请求，请求头上都会携带 "),a("code",[v._v("If-Modified-Since")]),v._v("，该值等于上一次响应头中的 "),a("code",[v._v("Last-Modified")]),v._v(" 的值")]),v._v(" "),a("li",[v._v("服务器收到 "),a("code",[v._v("If-Modified-Since")]),v._v(" 后，会将该属性的值与服务器上资源的最后修改时间进行匹配，从而判断资源是否发生了变化")]),v._v(" "),a("li",[v._v("如果发生变化会返回一个完整的响应内容，在响应头中添加新的 "),a("code",[v._v("Last-Modified")]),v._v(" 值，否则，只返回 "),a("code",[v._v("header")]),v._v(" 部分，状态码为 304，响应头不会再添加 Last-Modified")])]),v._v(" "),a("p",[v._v("弊端: Last-Modified 无法正确感知文件的变化，譬如说，文件的编辑时间修改了而内容没有修改，或者修改文件速度太快，几毫秒就改一次文件，If-Modified-Since 只能检测秒级的变化. 为了解决这个问题，Etag 作为 Last-Modified 的升级版，因时而生。 Etag 是通过标识字符串来辨别文件内容是否发生修改的，文件内容不一致才会生成新的标识字符串，这就弥补了 Last-Modified 时间戳的不足，通过 Etag 可以精准的感知文件的变化。")]),v._v(" "),a("h3",{attrs:{id:"etag-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[v._v("#")]),v._v(" Etag && If-None-Match")]),v._v(" "),a("p",[v._v("Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)")]),v._v(" "),a("p",[v._v("流程：")]),v._v(" "),a("ol",[a("li",[v._v("首次请求")]),v._v(" "),a("li",[v._v("服务器启用协商缓存情况下，会在响应头中带上 Etag")]),v._v(" "),a("li",[v._v("随后每次请求，请求头上都会带上 If-None-Match，该值等于上一次响应头中的 Etag 的值")]),v._v(" "),a("li",[v._v("服务器收到 If-None-Match 后，会进行比对，从而判断资源是否发生变化")]),v._v(" "),a("li",[v._v("如果变化返回一个完整响应内容，在响应头上添加新的 Etag 值，否则返回 304,响应头不会在添加 Etag")])]),v._v(" "),a("p",[v._v("弊端: Etag 的生成需要服务器付出额外的开销，会影响服务端性能。")]),v._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),a("p",[v._v("Etag 并不能替代 Last-Modified，只能作为 Last-Modified 的补充和强化存在，当 Etag 和 Last-Modified 同时出现时，以 Etag 为准。")])]),v._v(" "),a("p",[v._v("整个缓存机制的流程图：")]),v._v(" "),a("p",[a("img",{attrs:{src:_(243),alt:"缓存机制的流程图"}})]),v._v(" "),a("h2",{attrs:{id:"不能被缓存的请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不能被缓存的请求"}},[v._v("#")]),v._v(" 不能被缓存的请求")]),v._v(" "),a("ol",[a("li",[v._v("HTTP 信息头中包含 "),a("code",[v._v("Cache-Control:no-cache，pragma:no-cache（HTTP1.0）")]),v._v("，或 "),a("code",[v._v("Cache-Control:max-age=0")]),v._v(" 等告诉浏览器不用缓存的请求")]),v._v(" "),a("li",[v._v("需要根据 Cookie，认证信息等决定输入内容的动态请求是不能被缓存的")]),v._v(" "),a("li",[v._v("经过 HTTPS 安全加密的请求")]),v._v(" "),a("li",[v._v("POST 请求无法被缓存")]),v._v(" "),a("li",[v._v("HTTP 响应头中不包含 "),a("code",[v._v("Last-Modified/Etag")]),v._v("，也不包含 "),a("code",[v._v("Cache-Control/Expires")]),v._v(" 的请求无法被缓存")])]),v._v(" "),a("h2",{attrs:{id:"用户操作行为与缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户操作行为与缓存"}},[v._v("#")]),v._v(" 用户操作行为与缓存")]),v._v(" "),a("p",[a("img",{attrs:{src:_(244),alt:"用户操作行为与缓存"}})]),v._v(" "),a("h2",{attrs:{id:"浏览器中的操作对缓存的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的操作对缓存的影响"}},[v._v("#")]),v._v(" 浏览器中的操作对缓存的影响")]),v._v(" "),a("ol",[a("li",[v._v("强制刷新 – 当按下 ctrl+F5 来刷新页面的时候, 浏览器将绕过各种缓存(本地缓存和协商缓存), 直接让服务器返回最新的资源")]),v._v(" "),a("li",[v._v("普通刷新 – 当按下 F5 来刷新页面的时候,浏览器将绕过本地缓蹲来发送请求到服务器, 此时, 协商缓存是有效的")]),v._v(" "),a("li",[v._v("回车或转向 – 当在地址栏上输入回车或者按下跳转按钮的时候, 所有缓存都生效")])]),v._v(" "),a("h3",{attrs:{id:"cdn-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn-缓存"}},[v._v("#")]),v._v(" CDN 缓存")]),v._v(" "),a("p",[v._v("CDN(Content Delivery Network)内容分发网络")]),v._v(" "),a("p",[v._v("客户端直接从源站点获取数据，当服务器访问量大时会影响访问速度，进而影响用户体验，且无法保证客户端与原站点间的距离足够段，适合传输数据。CDN 解决的正是如何将数据快速可靠的从原站点传递到客户端，通过 CDN 对数据的分发，用户可以从一个距离较近的服务器获取数据，而不是源站点，从而达到快速访问，且减少原站点负载压力的目的。")]),v._v(" "),a("p",[a("img",{attrs:{src:_(245),alt:"CDN服务器"}})]),v._v(" "),a("ul",[a("li",[v._v("1、用户在浏览器访问栏中输入要访问的域名；")]),v._v(" "),a("li",[v._v("2、浏览器向 DNS 服务器请求对该域名的解析；")]),v._v(" "),a("li",[v._v("3、DNS 服务器返回该域名的 IP 地址给浏览器")]),v._v(" "),a("li",[v._v("4、浏览器使用该 IP 地址向服务器请求内容。")]),v._v(" "),a("li",[v._v("5、服务器将用户请求的内容返回给浏览器 cdn")])]),v._v(" "),a("p",[a("img",{attrs:{src:_(246),alt:"cdn服务器"}})]),v._v(" "),a("ul",[a("li",[v._v("1、用户在浏览器中输入要访问的域名。")]),v._v(" "),a("li",[v._v("2、浏览器向 DNS 服务器请求对域名进行解析。由于 CDN 对域名解析进行了调整，DNS 服务器会最终将域名的解析权交给 CNAME 指向的 CDN 专用 DNS 服务器。")]),v._v(" "),a("li",[v._v("3、CDN 的 DNS 服务器将 CDN 的负载均衡设备 IP 地址返回给用户。")]),v._v(" "),a("li",[v._v("4、用户向 CDN 的负载均衡设备发起内容 URL 访问请求。")]),v._v(" "),a("li",[v._v("5、CDN 负载均衡设备会为用户选择一台合适的缓存服务器提供服务。选择的依据包括：根据用户 IP 地址，判断哪一台服务器距离用户最近；根据用户所请求的 URL 中携带的内容名称，判断哪一台服务器上有用户所需内容；查询各个服务器的负载情况，判断哪一台服务器的负载较小。")]),v._v(" "),a("li",[v._v("基于以上这些依据的综合分析之后，负载均衡设置会把缓存服务器的 IP 地址返回给用户。")]),v._v(" "),a("li",[v._v("6、用户向缓存服务器发出请求。")]),v._v(" "),a("li",[v._v("7、缓存服务器响应用户请求，将用户所需内容传送到用户。")])]),v._v(" "),a("p",[a("img",{attrs:{src:_(247),alt:"expires、last-modifed"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);