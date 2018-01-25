# xtp_rich_client


## 常见问题
为了顺利的安装npm包，请将下载npm源路径设置为淘宝镜像地址

> 执行此命令：npm config set registry ttps://registry.npm.taobao.org

## 常见问题
1.安装报错（运行时报sass相关错误）

  解决办法
  > 执行此命令安装：npm install phantomjs-prebuilt@2.1.14 --ignore-scripts
  
  > eeee

2.错误：Module build failed: Error: ENOENT: no such file or directory, scandir 'E:\gitlab\admin\node_modules
  
  解决办法
  > 执行安装命令：npm rebuild node-sass

3.错误：ChromeDriver installation failed Error with
  
  解决办法
  >执行安装命令：npm install chromedriver --chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver
  
第一次启动，依次执行：

1) npm i
2) npm run dev