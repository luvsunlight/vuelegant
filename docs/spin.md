## 概述

> Spin 加载中

## props

|   参数   |          说明           |           类型           | 默认值 |
| :------: | :---------------------: | :----------------------: | :----: |
|   type   |  使用内置的 spin 样式   | Enum(spin,jellybox,ring) |  spin  |
|   size   |       spin 的尺寸       |  Enum(large,base,small)  |  base  |
|   tip    | spin 动画下方的文字提示 |          String          |   -    |
| showSpin |      是否显示 spin      |         Boolean          |  true  |
|   fix    | spin 是否占据整个父元素 |         Boolean          | false  |

!> 当使用 fix 属性，使 spin 占据整个父元素时，需要父元素有`position:relative`属性
