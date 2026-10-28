# 第十八轮设计系统与实现映射

日期：2026-10-28。本轮根据实际浏览器测到的MoneyThunder字体族和可重复的点击位移，调整泰文显示字体、交互几何及安全页阅读结构。业务、已审catalog、配置、Logo和原照片／App图保持。

## 字体和角色

竞品[原始字体测量](../../round18-preview/competitors/moneythunder-type-metrics.json)的font-family含orig_kanit_semibold／medium／regular，是实际DOM证据。自托管的是独立取得的Google Fonts Kanit，不下载竞品Wix字体或内容。

| 角色 | PC | 手机≤760px |
| --- | --- | --- |
| 正文 | 原Noto Sans Thai，16px/1.85、400 | 同左 |
| 标题／UI | Kanit500／600／700，Noto Sans Thai作fallback | 同左 |
| Hero产品／定位／额度 | 64／28／80px；产品line-height1.25 | 36／21／60px；产品1.3 |
| 章节／产品标题 | 一般40px，产品48px/1.25；紧凑产品40px | 32px |
| 页面／模块／条目角色 | 48／28／20px | 36／24／20px |
| 主要按钮 | Kanit17px/500，52px最小高、224px意图宽、10px角 | 主要转化满可用宽 |
| 文本操作／图片查看 | Kanit16px/500；查看14px、18px SVG，至少44px触点 | 同角色，按局部需要缩小辅助字 |
| 产品Tab | Kanit18px，白托盘、深青选中／白字 | 16px，最小72px |
| 产品说明 | Noto20px/1.8 | 18px/1.8 |
| FAQ／native summary | Kanit20px/500、30px行高，76px最小行、32px标记／20px SVG | 18px/28px、72px行、28px标记／18px SVG |
| 流程／安全编号 | 青蓝48×48px、14px角，Kanit24px/600 | 40×40px、12px角，22px字 |

Kanit六份Thai／Latin WOFF2合计98,568B；按unicode-range加载，font-display:swap，500／600 Thai与原Noto由builder预加载。文件来源／SHA和SIL OFL见[素材记录](visual-assets.md)，不依赖运行时外部字体请求。

精确主色#44E0F8、深青#00384C、正文#183D49及其他色彩token不变；仍用400／500／600／700角色，字号数值是本项目实现选择，不是外部规范强制值。

## 产品切换的几何合同

全宽青蓝章节、1120px共用shell及48／24／20px边距保留。桌面原App左、完整内容组右；showcase改align-items:start，移除垂直居中及600px最小高度。标题和Tab不再随短说明上下浮动。

`.product-panels`和`.product-media`分别是grid；各自两种状态同处grid-area:1/1，按实际最长内容自然保留空间。只对product-panel／data-product-media的hidden状态覆盖display为block，再用visibility:hidden、pointer-events:none及JS设置inert隐藏并禁用；不是改写全站hidden规则。图库、FAQ等原hidden行为保持。

Tab继续控制文字与配对图片两个ID，保留aria-selected、roving tabindex及四个键盘键；移焦使用preventScroll。240／210px原框、完整750×1624PNG和统一原图弹窗不变。隐藏状态的可聚焦性与辅助技术状态需在本轮实测，不靠源码推定已通过。

## 其他点击位置修复

- 弹窗记录scrollX／Y，锁定背景后恢复位置，关闭时恢复滚动和原触发器焦点；复制反馈位预留52px，空时visibility:hidden，不把空槽display:none。
- 首页／安全FAQ和native details变更时记录被点击控制的屏幕top，若关闭上方内容造成位移，按差量修正；html overflow-anchor:none避免浏览器自动锚定二次补偿。
- F01／F04定向FAQ入口直接设置答案后执行预期锚点定位，不套用普通点击的行定位。
- 同源、同文档含hash链接规范化/index.html、.html与尾斜杠别名，避免页面自身锚点触发重载；正常跨页不拦截。
- 从安全中心返回时恢复打开FAQ和滚动；兼容旧纯数字滚动存储，产品选中态照旧恢复。

## 安全页与其他页面

安全中心取消桌面侧目录和右移正文，改为横向章节导航位于完整共享内容轴上方；手机仍两列目录。FAQ、七类骗局和帮助summary使用同样的20／18px Kanit及同SVG加减标记；章节正文仍Noto。公司、页脚、已有渠道／政策状态保留，不新增资质或业务。

照片仍是有出处的Tony Wu曼谷情境配图；生成历史不重用。现有原生交互、preview/noindex、待开放下载和真实法律待提供状态保留。

## 验收与发布

第十八轮本地浏览器记录21个页面／宽度场景，无横向溢出、缺失ARIA目标或可见破图。4组产品切换／键盘返回与8组弹窗打开／关闭的位置及滚动差均为0；6组展开点击行差不超过0.25px，行高差0且测试组保持单开。14条交互记录包括锚点／返回、菜单、跳过导航、待开放下载、原图、复制反馈、字体与inert隐藏态。静态构建及发布另行核验；线上结论以`../round18-preview/release-verification.json`中的commit、CI和实际浏览器证据为准。照片未变，本轮字体／层级／交互验收不表示已与竞品完整视觉等同。原始记录与具体结果见[round18-review.md](round18-review.md)。
