(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{323:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是i-o"}},[t._v("#")]),t._v(" 什么是I/O")]),t._v(" "),a("p",[t._v("I/O就是把数据从一个地方拷贝到另一个地方。")]),t._v(" "),a("ul",[a("li",[t._v("文件读写是数据在内存和磁盘间的拷贝")]),t._v(" "),a("li",[t._v("网络请求是数据在网卡和内存间的拷贝")])]),t._v(" "),a("p",[t._v("NodeJS最擅长的场景就是I/O密集型操作，而进行I/O（将数据从一个地方拷贝到另一个地方），最好的抽象模型就是流。")]),t._v(" "),a("h2",{attrs:{id:"流-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流-stream"}},[t._v("#")]),t._v(" 流(Stream)")]),t._v(" "),a("p",[t._v("流代表随着时间产生的数据。 流抽象的是数据从A拷贝到B的过程。")]),t._v(" "),a("p",[t._v("读取流抽象读取过程——从目标读取数据，例如：")]),t._v(" "),a("ul",[a("li",[t._v("读取文件")]),t._v(" "),a("li",[t._v("读取网络数据")])]),t._v(" "),a("p",[t._v("写流抽象将数据写入目标的过程：")]),t._v(" "),a("ul",[a("li",[t._v("发送网络数据")]),t._v(" "),a("li",[t._v("写入数据库")]),t._v(" "),a("li",[t._v("写入文件")])]),t._v(" "),a("h3",{attrs:{id:"流的重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流的重定向"}},[t._v("#")]),t._v(" 流的重定向")]),t._v(" "),a("p",[t._v("管道的设计思想： “一个程序的输入应该是另一个程序的输出”")]),t._v(" "),a("p",[t._v("将随机数产生流重定向到"),a("code",[t._v("stdout")])]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" randomStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RandomStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrandomStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"i-o重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-o重定向"}},[t._v("#")]),t._v(" I/O重定向")]),t._v(" "),a("p",[t._v("在Linux中，I/O重定向有两种：")]),t._v(" "),a("ul",[a("li",[t._v("进程将输出给文件 "),a("code",[t._v("cat a.txt > b.txt")])]),t._v(" "),a("li",[t._v("进程将结果给管道 "),a("code",[t._v("ls | xargs -I {} rm {}")])])]),t._v(" "),a("p",[t._v("相似的，NodeJS中流的重定向就是一个流把数据给另一个流")]),t._v(" "),a("h2",{attrs:{id:"缓冲区-buffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲区-buffer"}},[t._v("#")]),t._v(" 缓冲区（Buffer）")]),t._v(" "),a("p",[t._v("流的设计中，读取和写入都会用缓冲区存储临时数据。")]),t._v(" "),a("p",[t._v("使用缓冲区有这样几个原因：")]),t._v(" "),a("ol",[a("li",[t._v("提速（思考每次如果只读取1bit，或者写入1bit的情形）")]),t._v(" "),a("li",[t._v("节省内存（思考要读取1GB数据统计词频，如果不用缓冲区要怎么做？）")])]),t._v(" "),a("h3",{attrs:{id:"缓冲区的编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲区的编码"}},[t._v("#")]),t._v(" 缓冲区的编码")]),t._v(" "),a("p",[t._v("缓冲区中的数据以二进制形式存在，简单理解缓冲区内部是一个"),a("code",[t._v("byte[]")]),t._v("。")]),t._v(" "),a("p",[t._v("相同的字符串不同字符集中数据编码的格式是不一样的，特别是中文。 比如说“你好！世界”， 在utf-8编码下二进制的数据和在gbk编码下二进制数据和长度是不同的。")]),t._v(" "),a("p",[t._v("缓冲区的数据可以直接和字符串进行转换：")]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("当然在上面的程序中有3个编码：")]),t._v(" "),a("ul",[a("li",[t._v("代码文件的编码。 “你好”的编码取决于代码文件用的什么编码。")]),t._v(" "),a("li",[t._v("Buffer的编码：只是一个记录，记录Buffer内容的编码格式。如果什么都不写，那么默认是二进制格式。")]),t._v(" "),a("li",[t._v("Buffer输出字符串的编码：这个会根据Buffer的编码、以及目标编码进行计算，并输出。")])]),t._v(" "),a("h4",{attrs:{id:"创建缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建缓冲区"}},[t._v("#")]),t._v(" 创建缓冲区")]),t._v(" "),a("p",[t._v("创建缓冲区主要是3个操作：")]),t._v(" "),a("ul",[a("li",[t._v("Buffer.from")]),t._v(" "),a("li",[t._v("Buffer.alloc")]),t._v(" "),a("li",[t._v("Buffer.allocUnsafe")])]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一种")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二种（每个字节都是0）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alloc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三种（每个字节的值不确定）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allocUnsafe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"buffer-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-length"}},[t._v("#")]),t._v(" Buffer.length")]),t._v(" "),a("p",[t._v("Buffer.length是Buffer内部数据的字节数。")]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Buffer工作起来很像数组：")]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newBuf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnewBuf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newBuf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hfllo")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);