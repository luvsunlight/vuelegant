## 概述

> Badge 徽标

## props

|     参数      | 说明                                                                           |        类型        | 默认值 |
| :-----------: | ------------------------------------------------------------------------------ | :----------------: | :----: |
|     count     | 徽标上的数字                                                                   | Number/String/slot |   -    |
| overflowCount | 数字最大值（超过后会变为`最大值+`）                                            |   Number/String    |   99   |
|   showZero    | 数字为 0 时是否显示                                                            |      Boolean       | false  |
|      dot      | 是否只显示红点                                                                 |      Boolean       | false  |
|    status     | 徽标的类型，可选为`primary`,`info`,`success`,`warning`,`error`，此时只会一个点 | Number/String/slot |   -    |
|     text      | 显示的文本，正常状态下替代 count，status 模式下为跟在点后面的文本              |       String       |   -    |
