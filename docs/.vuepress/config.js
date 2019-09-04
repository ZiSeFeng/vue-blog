const path = require('path');

module.exports = {
  // base: '/blog/',
  // repo: 'https://zisefeng.github.io/blog/',
  // host: '',
  markdown: {
    lineNumbers: true
  },
  title: '潇潇风雨的文档',
  description: '潇潇风雨 前端工程师',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    displayAllHeaders: false, // 默认值false
    activeHeaderLinks: false, // 默认值：true
    lastUpdated: '最后更新时间',
    nav: [
      { text: '主页', link: '/' },
      { text: '学习文档', link: '/notes/frontEnd/' },
      { text: '数据结构', link: '/structure/dataStructure/'},
      { text: '算法分类', link: '/algorithm/topic/'},
      { 
        text: 'contact',
        items: [
          { text: '博客', link: 'https://blog.csdn.net/maggie_live' },
          { text: 'github', link: 'https://github.com/ZiSeFeng/blog' },
        ]
      },
    ],
    // sidebarDepth: 2, // 设置侧边栏标题显示的层数
    sidebar: {
      '/notes/': [
        {
          title: 'JavaScript',
          collapsable: true,
          children: [
            '/notes/frontEnd/javascript/手动实现call、apply、bind',
            '/notes/frontEnd/javascript/EvenetEmitter',
            '/notes/frontEnd/javascript/防抖',
            '/notes/frontEnd/javascript/节流',
            '/notes/frontEnd/javascript/浅拷贝和深拷贝',
            '/notes/frontEnd/javascript/数组去重、扁平、最值',
            '/notes/frontEnd/javascript/数组乱序-洗牌算法',
            '/notes/frontEnd/javascript/函数柯里化',
            '/notes/frontEnd/javascript/手动实现JSONP',
            '/notes/frontEnd/javascript/模拟实现promise',
            '/notes/frontEnd/javascript/手动实现ES5继承',
            '/notes/frontEnd/javascript/手动实现instanceof',
            '/notes/frontEnd/javascript/基于promise的ajax封装',
            '/notes/frontEnd/javascript/单例模式',
            '/notes/frontEnd/javascript/异步循环打印',
            '/notes/frontEnd/javascript/图片懒加载'
          ]
        },
        {
          title: 'vue',
          collapsable: true,
          children: [
            '/notes/frontEnd/VueJS组件编码规范',
            '/notes/frontEnd/vue-cli脚手架快速搭建项目',
            '/notes/frontEnd/深入理解vue中的slot与slot-scope'
          ]
        },
        {
          title: 'webpack',
          collapsable: true,
          children: [
            '/notes/frontEnd/webpack入门',
          ]
        },
        {
          title: 'PWA',
          collapsable: true,
          children: [
            '/notes/frontEnd/PWA介绍及快速上手搭建一个PWA应用'
          ]
        }
      ],
      '/structure/': [
        {
          title: '数据结构专题',
          collapsable: true,
          children: [
            '/structure/dataStructure/'
          ]
        },
        {
          title: '二叉树',
          collapsable: true,
          children: [
            '/structure/binary/二叉树的基本操作',
            '/structure/binary/二叉树的前序遍历',
            '/structure/binary/二叉树的中序遍历',
            '/structure/binary/二叉树的后序遍历',
            '/structure/binary/对称二叉树',
            '/structure/binary/重建二叉树',
            '/structure/binary/二叉树的镜像',
            '/structure/binary/搜索二叉树的第k个节点',
            '/structure/binary/搜索二叉树的后序遍历',
            '/structure/binary/二叉树的最大深度',
            '/structure/binary/二叉树的最小深度',
            '/structure/binary/平衡二叉树',
            '/structure/binary/二叉树中和为某一值的路径',
            '/structure/binary/搜索二叉树与双向链表',
            '/structure/binary/序列化二叉树',
            '/structure/binary/二叉树的下一个节点',
            '/structure/binary/树的子结构'
          ]
        },
        {
          title: '链表',
          collapsable: true,
          children: [
            '/structure/linklist/从尾到头打印链表',
            '/structure/linklist/反转链表',
            '/structure/linklist/复杂链表的复制',
            '/structure/linklist/合并两个排序的链表',
            '/structure/linklist/链表倒数第k个节点',
            '/structure/linklist/链表中环的入口节点',
            '/structure/linklist/两个链表的第一个公共节点',
            '/structure/linklist/圈圈中最后剩下的数字',
            '/structure/linklist/删除链表中的最后节点or重复的节点'
          ]
        },
        {
          title: '数组',
          collapsable: true,
          children: [
            '/structure/array/把数组排成最小的数',
            '/structure/array/第一个只出现一次的字符',
            '/structure/array/调整数组顺序使奇数位于偶数前面',
            '/structure/array/构建乘积数组',
            '/structure/array/和为S的连续正整数序列',
            '/structure/array/和为S的两个数字',
            '/structure/array/连续子数组的最大和',
            '/structure/array/两数之和',
            '/structure/array/扑克牌顺子',
            '/structure/array/三数之和',
            '/structure/array/数组中出现次数超过数组长度一般的数字',
            '/structure/array/数组中的逆序对',
            '/structure/array/顺时针打印矩阵',
            '/structure/array/四数之和',
            '/structure/array/在排序数组中查找数字'
          ]
        },
        {
          title: '堆',
          collapsable: true,
          children: [
            '/structure/heap/堆的基本操作',
            '/structure/heap/数据流中的中位数',
            '/structure/heap/最小的k个数'
          ]
        },
        {
          title: '栈和队列',
          collapsable: true,
          children: [
            '/structure/stackqueue/包含min函数的栈',
            '/structure/stackqueue/滑动窗口的最大值',
            '/structure/stackqueue/用两个栈实现队列',
            '/structure/stackqueue/栈的压入弹出序列'
          ]
        },
        {
          title: '字符串',
          collapsable: true,
          children: [
            '/structure/string/表示数值的字符串',
            '/structure/string/替换空格',
            '/structure/string/正则表达式匹配',
            '/structure/string/字符串的排列',
            '/structure/string/字符串的翻转',
            '/structure/string/字符流中第一个不重复的字符'
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '算法专题',
          collapsable: true,
          children: [
            '/algorithm/topic/'
          ]
        },
        {
          title: '查找',
          collapsable: true,
          children: [
            '/algorithm/lookup/二维数组查找',
            '/algorithm/lookup/旋转数组的最小数字',
            '/algorithm/lookup/在排序数组中查找数字'
          ]
        },
        {
          title: '递归和循环',
          collapsable: true,
          children: [
            '/algorithm/recursion/斐波拉契数列',
            '/algorithm/recursion/跳台阶',
            '/algorithm/recursion/变态跳台阶',
            '/algorithm/recursion/矩形覆盖'
          ]
        },
        {
          title: '分治',
          collapsable: true,
          children: [
            '/algorithm/divide/'
          ]
        },
        {
          title: '回溯算法',
          collapsable: true,
          children: [
            '/structure/binary/二叉树中和为某一值的路径',
            '/structure/string/字符串的排列',
            '/algorithm/recall/和为sum的个数',
            '/algorithm/recall/矩阵中的路径',
            '/algorithm/recall/机器人的运动范围',
            '/algorithm/recall/N皇后问题',
            '/algorithm/recall/N皇后问题2',
          ]
        },
        {
          title: '排序',
          collapsable: true,
          children: [
            '/algorithm/sort/插入排序',
            '/algorithm/sort/堆排序',
            '/algorithm/sort/归并排序',
            '/algorithm/sort/快速排序',
            '/algorithm/sort/冒泡排序',
            '/algorithm/sort/选择排序'
          ]
        },
        {
          title: '数学运算',
          collapsable: true,
          children: [
            '/algorithm/opera/1+2+3+...+n',
            '/algorithm/opera/不用加减乘除做加法',
            '/algorithm/opera/丑数',
            '/algorithm/opera/二进制中1的个数',
            '/algorithm/opera/数值的整数次方',
            '/algorithm/opera/数值中只出现一次的数字',
            '/algorithm/opera/整数中1出现的次数',
            '/algorithm/opera/字符串转换成整数'
          ]
        },
        {
          title: '动态规划',
          collapsable: true,
          children: [
            '/algorithm/plan/动态规划-概览',
            '/algorithm/plan/最小路径和'
          ]
        },
        {
          title: '贪心算法',
          collapsable: true,
          children: [
            '/algorithm/greedy/贪心算法-概览',
            '/algorithm/greedy/分发饼干'
          ]
        }
      ]
    }
    // sidebar: [
    //   {
    //     title: "前端",
    //     collapsable: true,
    //     children: [
    //       '/foo/',
    //       ['notes/frontEnd/VueJS组件编码规范','VueJS组件编码规范'],
    //       // 'notes/frontEnd/VueJS组件编码规范',
    //     ]
    //   }, {
    //     title: "moblie模块",
    //     collapsable: true,
    //     children: [
    //       '/bar/',
    //       '/bar/tree',
    //     ]
    //   }
    // ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@vuepress': path.join(__dirname, '../images/vuepress'),
      }
    }
  },
  algolia: { // 设置搜索
    apiKey: '<API_KEY>',
    indexName: '<INDEX_NAME>'
  },
  valineConfig: {
    appId: '...',// your appId
    appKey: '...', // your appKey
  },
  plugins: [
    '@vuepress/blog',
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/last-updated'],
    ['@vuepress/medium-zoom',{
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }
    ]
  ]
}
