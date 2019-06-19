## 概述

> Progress 进度条

## props

|    参数     |         说明         |            类型            |   默认值   |
| :---------: | :------------------: | :------------------------: | :--------: |
|   percent   |    进度条的百分比    |       Number/String        |     0      |
|   status    |     进度条的状态     | Enum(primary,active,error) |   false    |
|  formatter  |   进度条文本的模板   |          Function          |  p=>p+"%"  |
|  doneText   |  进度条完成后的显示  |            slot            | Icon-check |
|  showInfo   | 是否显示进度条的文本 |          Boolean           |    true    |
| strokeWidth |      进度条宽度      |       Number/String        |     10     |
| strokeColor |      进度条颜色      |           String           |  primary   |
