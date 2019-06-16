## 概述

> tag

## props

|   参数    |        说明        |  类型   | 默认值  |
| :-------: | :----------------: | :-----: | :-----: |
| closable  |  标签是否可以关闭  | Boolean |  false  |
| checkable | 标签是否可以被选中 | Boolean |  false  |
|  checked  |   标签是否被选中   | Boolean |  true   |
|   color   |     标签的颜色     | String  | primary |

> color 的取值有 `primary`, `success`, `info`, `warning`, `error`, `red`, `blue`, `green`, `purple`, `grey`,`pink`, `yellow`, `orange`;

## event

|  名称   |       说明       |  参数   |
| :-----: | :--------------: | :-----: |
| onClose | 关闭标签时的回调 |  event  |
| onCheck | 选择标签时的回调 | checked |
