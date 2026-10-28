# Kiangjai V2 第十九轮实现与交付边界

日期：2026-10-28。独立仓库`Muggle-icon/kiangjai-thailand-website-v2`。本轮改变首页结构与构图，保留内容、真实产品框架、品牌、原图及原生功能；V1不受影响。

第十九轮本地浏览器已记录21个页面／宽度场景，无横向溢出、缺失ARIA目标或破图；1440px两张原图／两个region同时可见、均为240px且无Tab。4组紧凑产品切换／键盘返回、8组弹窗前后几何与scroll差均为0；2组首页FAQ键盘展开行位移−0.1875／0.125px、行高差0；13条交互记录覆盖跨断点焦点、移动顺序、导航／返回、原图、下载和反馈。静态构建7页、链接／重复ID、JS语法及diff检查通过。以上为浏览器视口验收，不代表物理设备测试或完整竞品视觉等同。当前截图／报告在`../round19-preview/`；线上发布结论以`../round19-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

## 当前页面和组件

| 区域 | 当前职责及实现 |
| --- | --- |
| Hero | 明亮#44E0F8全宽构图、深青文字、PC96／手机72px额度；同一曼谷实拍CSS放大1.42／1.12，PC580／手机700px最小高度，明确待开放下载 |
| 产品 | 白色居中章标题；>1100px左侧两张240px原App并列、右侧两个完整说明；≤1100px稳定成对Tab，≤760px为Tab→210px媒体→正文 |
| 四步 | 原四步与步骤03真实贷款计划图，48／40px编号，PC连接／紧凑两列／手机纵向连接 |
| FAQ | 原7条、PC居中标题及880px列表、手机左对齐标题，单开和点击行定位保留 |
| 共享页脚 | 下载、品牌／公司／联系、6主导航、安全及政策集中一次；About锚点保留，原主体三个重复章节撤去位置但保留内容 |
| 安全／政策 | 原内容轴与现有功能不改；共用新页脚，法律正文仍真实待提供 |

PC共享轴1120px及48／24／20px边距不变。Kanit标题／UI、Noto正文和400／500／600／700字重角色保留。Hero为明确的局部行动尺寸244×56px，手机满宽52px；共用按钮52px／10px角，页头44px，页脚联系40px。详情见[design-system.md](design-system.md)。

继续静态HTML/CSS/JS及Python builder。源文件为hero／benefits／header／footer组件、home页面、三份CSS和app.js；生成四个根页面与三个clean-route aliases需一同构建提交。未改catalog、业务config或图片／字体文件。`APP_SCREENS`／`{{app-screen:…}}`继续统一七处真实原图实例。

## 响应式和交互合同

宽屏>1100px显示两个region和两个完整媒体；紧凑模式才有Tab／tabpanel与双aria-controls IDREFS、roving tabindex及四键操作。compact两正文／两媒体各叠一格，非激活不可见且inert但保留最长真实内容高度。移动DOM顺序为Tab／媒体／正文，不再先读完整说明才看到图。跨断点保留当前／被聚焦feature，必要时从隐藏Tab移焦对应可见图片查看按钮。

页头顺序FAQ在About前；首页scrollspy仅在home运行、按真实DOM位置排序，安全页单独标记。继承弹窗位置／焦点恢复、52px复制反馈槽、FAQ与details点击行定位、同文档别名锚点不重载，以及返回FAQ／产品／scroll状态。当前轮已记录13条关键交互、4组紧凑切换、8组弹窗及2组首页FAQ，未记录路径不推定为已测试。

## 素材与业务边界

当前Hero仍为[Tony Wu／Pexels16761599](https://www.pexels.com/photo/woman-working-on-food-stand-16761599/)，来源地点曼谷，上传日2023-05-10，拍摄日未核验；[Pexels许可](https://www.pexels.com/license/)记录保留。两生产WebP仍1200×800／172,856B和2200×1467／433,824B。仅本轮CSS裁切、放大、亮度／饱和及青蓝渐隐变化；未生成或修改人物场景，不暗示客户／代言、国籍或财务状态。

Kanit六份OFL WOFF2仍98,568B，与原Noto共同自托管；没有再下载竞品文件。图标／字体／原图出处见[visual-assets.md](visual-assets.md)，生成实验只保留[历史记录](generated-art-prompts.md)。

| 保留基线 | SHA256 |
| --- | --- |
| 已审Thai catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |
| 最新原HOME PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |

保留四步、7条首页FAQ、6条安全FAQ、7类骗局、联系与政策入口。不新增利率、审批、资格、牌照、商店、下载QR、官方渠道或证言；公司登记0105567184971不是放贷牌照。图内200,000推广、日利率及示例金额／时效不提取为官网承诺。

## 验收与正式上线资料

本轮原始记录为21／4／8／2／13，详见[round19-review.md](round19-review.md)。独立整页视觉复查首轮指出移动品牌断行和配图说明对比度，两项修改后在390／360裁图复查完成。以上检查基于浏览器视口；不宣称物理设备测试、完整竞品视觉等同或由本地通过推定线上已发布。线上commit／CI／实际浏览器结果依上方release记录。

继续`releaseStatus: preview`／noindex。正式运营仍需业务确认商店／开发者身份、有效资质及核验地址、正式隐私与条款／日期、官方举报渠道，以及无推广／费率冲突的App展示图。复用既有设计技能，无本轮新增安装。详见[round19-review.md](round19-review.md)。
