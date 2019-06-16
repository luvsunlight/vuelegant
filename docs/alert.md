## 概述

> Alert 警告

## props

|   参数    |                         说明                         |  类型   |              默认值              |
| :-------: | :--------------------------------------------------: | :-----: | :------------------------------: |
|   type    | 警告的样式，可选为`info`,`success`,`warning`,`error` | String  | info(`banner` 模式下为 warning)  |
| closable  |                 警告窗口是否可以关闭                 | Boolean |              false               |
| closeText |             关闭文字自定义（默认为图标）             | String  |                -                 |
| showIcon  |                 是否显示警告窗口图标                 | Boolean | false（`banner` 模式下为`true`） |
|   Icon    |                    自定义窗口图标                    |  slot   |                -                 |
|  banner   |               是否设置为 `banner` 模式               | Number  |                0                 |
|   desc    |                    警告的文字介绍                    | String  |                -                 |

## event

|  名称   |         说明         |       参数       |
| :-----: | :------------------: | :--------------: |
| onClose | 关闭时触发的回调函数 | affixed(Boolean) |
