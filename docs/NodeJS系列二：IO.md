---
title: NodeJS系列二：I/O
date: 2021-8-16
categories: 
layout: Post
tags: 
summary: 
feed:
  enable: true
---

## 什么是I/O

I/O就是把数据从一个地方拷贝到另一个地方。

- 文件读写是数据在内存和磁盘间的拷贝
- 网络请求是数据在网卡和内存间的拷贝

NodeJS最擅长的场景就是I/O密集型操作，而进行I/O（将数据从一个地方拷贝到另一个地方），最好的抽象模型就是流。



## 流(Stream)

流代表随着时间产生的数据。 流抽象的是数据从A拷贝到B的过程。



读取流抽象读取过程——从目标读取数据，例如：

- 读取文件
- 读取网络数据

写流抽象将数据写入目标的过程：

- 发送网络数据
- 写入数据库
- 写入文件



### 流的重定向

管道的设计思想： “一个程序的输入应该是另一个程序的输出”

将随机数产生流重定向到`stdout` 

```tsx
const randomStream = new RandomStream()
randomStream.pipe( process.stdout )
```



### I/O重定向

在Linux中，I/O重定向有两种：

- 进程将输出给文件 `cat a.txt > b.txt`  
- 进程将结果给管道 `ls | xargs -I {} rm {} ` 



相似的，NodeJS中流的重定向就是一个流把数据给另一个流



## 缓冲区（Buffer）

流的设计中，读取和写入都会用缓冲区存储临时数据。 

使用缓冲区有这样几个原因：

1. 提速（思考每次如果只读取1bit，或者写入1bit的情形）
2. 节省内存（思考要读取1GB数据统计词频，如果不用缓冲区要怎么做？）



### 缓冲区的编码

缓冲区中的数据以二进制形式存在，简单理解缓冲区内部是一个`byte[]`。 

相同的字符串不同字符集中数据编码的格式是不一样的，特别是中文。 比如说“你好！世界”， 在utf-8编码下二进制的数据和在gbk编码下二进制数据和长度是不同的。 

缓冲区的数据可以直接和字符串进行转换：

```tsx
const buffer = Buffer.from("你好！", 'utf8')

const str = buffer.toString('utf8')
```

当然在上面的程序中有3个编码：

- 代码文件的编码。 “你好”的编码取决于代码文件用的什么编码。
- Buffer的编码：只是一个记录，记录Buffer内容的编码格式。如果什么都不写，那么默认是二进制格式。
- Buffer输出字符串的编码：这个会根据Buffer的编码、以及目标编码进行计算，并输出。

#### 创建缓冲区

创建缓冲区主要是3个操作：

- Buffer.from
- Buffer.alloc
- Buffer.allocUnsafe

```tsx
// 第一种
const buf = Buffer.from("你好")

// 第二种（每个字节都是0）
const buf = Buffer.alloc(1024*4)


// 第三种（每个字节的值不确定）
const buf = Buffer.allocUnsafe(1024*4)
```

#### Buffer.length

Buffer.length是Buffer内部数据的字节数。 

```tsx
const buf = Buffer.from("你好！")

console.log("你好".length)
console.log(buf.length)
```

Buffer工作起来很像数组：

```tsx
const buf = Buffer.from("Hello")

const newBuf = buf.slice(0, 2)
newBuf[1]++

console.log(newBuf.toString('utf8'))
// Hf
console.log(buf.toString('utf8'))
// Hfllo

```

