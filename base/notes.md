# nodejs 环境组成

## CommonJS

### require

1.  module 被加载的时候执行，加载后缓存(只加载一次)
2.  一旦出现某个模块被循环加载，就只输出已经执行的部分，还未出现的部分不会输出
3.  `require('模块路径')` 自定义模块可按绝对路径或相对路径去找；系统内建模块，无需路径；第三方模块，无需路径，会从 本层 node_modules 去一层层往外找

### exports

### module

## global

eg:

- CommonJS
- Buffer、process、console
- timer

## process

process 对象是的一个实例
<br>一些参数和方法

- argv, argv0, execArgv, execPath
- env
- cwd()
