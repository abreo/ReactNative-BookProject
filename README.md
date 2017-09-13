## BookProject

简介：BookProject，由App开发小组全员（我）进行持续开发，目前适配安卓（穷)


---


#### 项目涉及技术栈：
- 导航：[react-navigation](https://reactnavigation.org/)
- UI: [ant-mobile](https://mobile.ant.design/index-cn) （只作为弹出层使用）
- 静态类型检测：[Flow](https://flow.org/)（已配置，出于效率考虑，暂不使用）
- 不可变类型：[immutable](https://facebook.github.io/immutable-js/docs/#/)(暂未使用，后续跟进)
- 全局状态管理：[redux](http://redux.js.org/)(暂未使用，后续跟新)


---


#### 项目结构：
> 项目结构基于App的直接导航关系（react-navigation），目前还处于调整阶段。正在追求合理完善的结构。

##### 基础目录结构：

<pre>

src
├── Components              // 组件
├── DrawerScreen            // 侧边栏
├── images                  // 图片资源
├── LoginScreen	            // 登陆
├── MainScreen              // App主要部分（包含tab）
├── network                 // 暂无（预留网络封装
├── TwoScreen               // 暂无（预留网络封装）
├── utils                   // 工具封装集合
└── app.android.js          // 安卓入口
 
</pre>

##### App导航结构：

> 该结构基于react-navigation构建，目前存在部分问题，最显著的问题是嵌套的子页面能够打开drawer，也就是欠缺锁死手势打开侧边栏相关配置。正在等待官方修复中，参考issus[#793]（https://github.com/react-community/react-navigation/pull/793）

<pre>

Stack                               // 起点
│ 
├── Stack                           // App入口
│   ├── page                        // login/register && 引导页
│   └── page...
│ 
├── Drawer                          // 侧边栏作为主导航（默认进入Tab）
│   │
│   ├── Tab                         // 主页Tab（项目中已将Tab在侧边栏中隐藏）
│   │    ├── header                 // 设置公用header(并不是严格层级)
│   │    └── Navigation             // 导航
│   │           │
│   │           ├── Stack           // tab中包含的stack集合
│   │           │   ├── page        // 详情页（默认情况下该页为登陆后显示主页）
│   │           │   └── page...
│   │           ├── Stack
│   │           ├── Stack	  
│   │           └── Stack
│   ├── Stack                       // 侧边栏第一项
│   │    ├── page                   // 侧边栏详情页
│   │    └── page...
│   ├── Stack
│   ├── Stack
│   └── Stack
│

</pre>