在这里写一个工具，主要是给自己看源码用。

## 使用方式
全局安装：
```
npm install js-structure -g
```

然后进入需要分析的文件夹，执行
```
analysis
```

## 生成之后的样子

生成之后的图片样子：
![all-js-analysis](http://laihuamin.oss-cn-beijing.aliyuncs.com/all-js-analysis.png)
![one-analysis](http://laihuamin.oss-cn-beijing.aliyuncs.com/one-analysis.png)

## 大致的编写流程

1.了解npm包的书写规则 <br>
2.利用fs模块读取文件夹中的文件，判断是否是文件夹，采取是否递归，最后获得filename和pathname。<br>
3.我们利用pathname组成echart的nodes节点<br>
4.利用fs模块读取每个文件的内容，利用正则筛选出引入的文件，最后的links结果进行去重<br>
5.将links中的target属性进行规范化，最后输出<br>
6.合成模版。

## 备注
如果大家喜欢，就给个star吧，谢谢