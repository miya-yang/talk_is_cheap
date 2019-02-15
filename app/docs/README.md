# Talk Is Cheap

> 基于 electron-vue 开发的社交软件

## 组件

### TitleBar / 标题栏

> 我们重新定义了标题栏样式，移除了原生的边框及标题栏

props 参数

| 参数名称 | 说明 | 类型 | 默认值 |
| -------- | ---- | ---- | ------ |
| hasMinimumBtn | 是否显示最小化按钮 | Boolean | true |
| hasScaleBtn | 是否显示放大缩小按钮 | Boolean | true |
| hasCloseBtn | 是否显示关闭按钮 | Boolean | true |
| title | 显示标题内容 | String | - |

#### ControlButton / 控制按钮

> 适用于 TitleBar 的控制按钮，可自行定义事件、图标样式等属性

props 参数

| 参数名称 | 说明 | 类型 | 默认值 |
| -------- | ---- | ---- | ------ |
| iconName | 图标名称，值参见 iView 框架中 Icon 部分 | String | - |
| iconColor | 图标颜色 | String | #fff |
| hoverType | 鼠标经过背景颜色，可选值：default, warning | String | default |
| hoverTitle | 鼠标经过提示文字 | String | - |

events 事件

| 事件名 | 说明 | 返回值 |
| ------ | ---- | ------ |
| click | 点击按钮时触发 | - | 
