## BookProject

简介：BookProject，由App开发小组全员（我）进行持续开发，目前适配安卓（穷)


---


#### 项目涉及技术栈：
- 导航：[react-navigation](https://reactnavigation.org/)
- App首屏加载[react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen)（目前只进行了安卓端配置）
- UI: [ant-mobile](https://mobile.ant.design/index-cn) （只作为弹出层使用,9.13更正，由于性能原因，取消了ui的使用，已对弹出层进行原生封装）
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
> react-nativation 务必使用"^1.0.0-beta.13"以上版本，修复增加了侧边目锁定

</pre>

Stack            
│ 
├── Drawer             
│   │    
│   ├── login                      
│   │    ├── login             
│   │    └── register
│   │
│   ├── Tab                         // 主页Tab（项目中已将Tab在侧边栏中隐藏）
│   │    ├── header                 // 设置公用header(并不是严格层级)
│   │    └── Navigation             // 导航
│   │           │
│   │           ├── Stack(主页)     // tab中包含的stack集合
│   │           │   ├── page        // 详情页（默认情况下该页为登陆后显示主页）
│   │           │   └── page...
│   │           ├── Stack(沟通)
│   │           ├── Stack(书架)
│   │           └── Stack(上传)
│   ├── Stack                       // 侧边栏第一项
│   │    ├── page                   // 侧边栏详情页
│   │    └── page...
│   ├── Stack
│   ├── Stack
│   └── Stack
│

</pre>



***
#### 目前问题

* 没有做防抖设置（多次点击）