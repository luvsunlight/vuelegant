## 概述

> Avatar 头像

## props

| 参数  |      说明      |          类型          | 默认值 |
| :---: | :------------: | :--------------------: | :----: |
| icon  | 头像内的 icon  |         String         |  user  |
| shape |   头像的形状   |  Enum(square,circle)   | circle |
| size  |   头像的大小   | Enum(large,base,small) |  base  |
|  src  | 头像图片的 src |         String         |   -    |
|  alt  | 头像图片的 alt |         String         |   -    |

!> 图片链接最好用外链，这也是项目利用资源的一种规范

## event

|   名称    |     说明     |       参数       |
| :-------: | :----------: | :--------------: |
| loadError | 图片加载失败 | affixed(Boolean) |
