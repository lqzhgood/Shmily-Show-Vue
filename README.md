# 说明

请先阅读 https://github.com/lqzhgood/Shmily

此工具用来显示 `Shmily-Msg` 格式的工具

> Demo https://github.com/lqzhgood/Shmily-Show-Demo

## 使用

0. 🎞️ 安装 node 环境 [http://lqzhgood.github.io/Shmily/guide/setup-runtime/nodejs.html]
```diff
+ 🎞️ 1-12   -->   https://www.bilibili.com/video/BV12u4y1T7GV/
```
1. 🏞️ 下载本项目并解压 [http://lqzhgood.github.io/Shmily/guide/setup-runtime/github-down-repo.html]
2. 🎞️ 安装依赖 [http://lqzhgood.github.io/Shmily/guide/setup-runtime/nodejs-dependencies.html]
3. 将 [Get](http://lqzhgood.github.io/Shmily/guide/use/get.html) 中获取的 `数据文件` 放入 `/memoryweb/src/assets/data/msg/` 中

    > 文件名会作为 ID 的一部分，确认后不要反复修改

4. 将 [Get](http://lqzhgood.github.io/Shmily/guide/use/get.html) 中获取的 `资源文件` 放入 `/msgData/data/` 中
```
如果想和以后的记录累计, 请自行保存 `数据文件` 和 `资源文件`
和以后的数据一起重复 Show(本项目) 的过程即可一起累计统计与时间线显示
```

<details> <summary><code>结构示例</code></summary>
    
```
// 更详细的参考 wiki /docs/dev.md#目录说明

- memoryweb
  - src
    - assets 
      - data
        - msg  <--- [数据文件] 夹
          - MobileQQ-lqzh-20201212.json
          - MobileQQ-lqzh-20230101.json
          - Wechat-lqzh-20230203.json
          ...

- msgData
  - data  <--- [资源文件] 夹
    - MobileQQ-lqzh-20201212
        - images
        - videos
        ...
    - MobileQQ-lqzh-20230101
        - images
        - videos
        ...
    - Wechat-lqzh-20230203
        - images
        - videos
        ...
```

</details>



5. [可选] 修改 **查询** 页相关配置  `memoryweb\src\config.js`
   > 基本上都不需要改动, 如果要个性化的 (`HEAD_INFOS`等) 可以改一下
6. [可选] 修改 **统计** 页相关配置 `memoryweb\script\user\`  

        - banDict.js 词云中不需要的词可以在这里过滤
        - userDict.txt 词云用到的分词-用户词典 参考 https://github.com/fxsjy/jieba#使用示例
        - commentTag.js 统计评论中 Tag 出现的次数
        - userGroup.js 对 sender / receiver 分组   // [查询-搜索] 和 [统计] 都会用

7. [可选] 如需对数据文件增删改查并添加评论, 参考文档 [./docs/modify.md](./docs/modify.md) 完成修改

8. 进入 `memoryweb` 执行 `npm run build`
9. 解压缩 `msgData\tools\Chrome.zip`
    
   -   确保解压后路径 `msgData\tools\Chrome\MyChrome.exe` 正确 // 可能被误杀
   -   删除 `Chrome.z*` 压缩包
     
10. 将 `msgData\*` 复制到 `memoryweb\dist\*`
11. `memoryweb/dist` 就是全静态的最终文件, 双击 `start.bat` 可以直接运行浏览
    - [不推荐] 部署到服务器, 使用 `nginx` 等 web 服务器均可, 但必须支持 [Accept-Ranges](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges)
        - 项目为本地应用设计, 数据量极大([FAQ](https://github.com/lqzhgood/Shmily-Show/blob/main/docs/Q_A.md#%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%9F%E6%88%90%E7%9A%84%E6%95%B0%E6%8D%AE-json-%E8%BF%99%E4%B9%88%E5%A4%A7))
        - 包含完整的数据导出, 不限于 Shimly 上显示的. 可能会暴露你意想不到的隐私
12. 完成


## Wiki

更详细的如

- 文件夹结构
- ModifyServer 对消息 增删改查
- ModifyServer 对评论 增删改擦
- ...

参考 [./docs/wiki.md](./docs/wiki.md)


## feature

- [ ] 数字孪生 根据聊天记录生成模型, 构建一个有 自己/对方 "人设/语境" 下的生成式对话 Ai.  [idea link](https://v2ex.com/t/931521)


## 感谢

http://lqzhgood.github.io/Shmily/guide/other/thanks.html

## 捐赠

点击链接 http://lqzhgood.github.io/Shmily/guide/other/donation.html 看世界上最可爱的动物
