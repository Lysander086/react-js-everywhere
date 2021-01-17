### tutorial link
[上篇](https://zhuanlan.zhihu.com/p/104771562)
[下篇](https://zhuanlan.zhihu.com/p/104831343)

[repo link](https://github.com/Yuezi32/react-family)

- stylus integration, less integration check link for more details.

- 5.3 组件传参

  vue组件有data和props。对应react的是state和props。
  
  react向子组件传参使用以下方式：
  
      <Header 
          param1="abc"
          param2="c"
          func1={()=>{console.log('func1')}}
      />