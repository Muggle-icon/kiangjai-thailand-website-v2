# 第十三轮视觉素材与来源

日期：2026-10-27。本轮访客页面使用用户原Logo／App图标／完整App PNG，以及一幅原创生成的照片风格生活场景。最新用户要求已替代上一轮不新增人物／纯App首屏方向。场景提供泰国日常经营情境，**不是实际客户、商店、员工、公司地点或借款结果的证明**。

## 当前映射

| 素材 | 来源／尺寸 | 当前用途 |
| --- | --- | --- |
| `assets/campaign/neighborhood-shop-1862.webp` | 内置图像生成工具母版的优化派生，1862×845，165,894B | PC生活场景Hero；原生文字与遮罩另行实现 |
| `assets/campaign/neighborhood-shop-1400.webp` | 同一母版缩放派生，119,812B | 手机Hero照片，由CSS保持人物、双手、手机与柜台的有效裁切 |
| `assets/brand/logo-master.png` | 用户原Logo，367×124 | 白色页头及公司区保留深青，深青页脚CSS呈白；未改PNG |
| `assets/brand/app-icon.png` | 用户原App图标 | 页尾下载身份 |
| `assets/app/home-overview.png` | 用户最新原图，750×1624 | 产品介绍主图、图库第1张；原生框PC240px／手机210px |
| `assets/app/repayment.png` | 用户原图，750×1624 | 低权重还款说明及图库第2张，带示例说明 |
| `assets/app/loan-plan.png` | 用户原图，750×1624 | 步骤03确认详情、图库第3张 |
| `assets/app/withdrawal-current.png` | 用户原图，750×1624 | 图库第4张状态示例，不作到账凭证 |
| `assets/app/home-current.png`、`home.png` | 旧原图，750×1624 | 保留来源，不作当前主展示 |
| `assets/illustrations/application.svg`、`repayment.svg` | 第十轮向量素材 | 历史来源保留，不作当前优势主图 |
| `assets/icons/` | 共享功能SVG | 查看、关闭、下载、箭头、FAQ和安全提醒 |

所有App图保持原比例与原内容，不裁切、重绘、涂改或用生成工具处理。图库不是操作App。仅步骤03有匹配确认页，不把状态图配作注册、审批或到账操作。

## 本轮生成母版与概念

生成场景母版存于仓库外`../round13-preview/generated-masters/bangkok-shop-life.png`，描绘一位穿日常陶土色棉T恤、在社区小店柜台查看手机并处理包裹的泰国女性。图像工具生成内容，不能描述成实拍摄影、真实用户证言或公司经营资料。原生网页仅使用两份优化WebP；字体、Logo、按钮和产品UI仍来自代码与原素材。

同目录六幅`concept-*.png`是桌面Hero、产品／还款、流程／公司、FAQ／转化／页脚、安全中心及手机Hero的设计参考。**这些概念图不部署；其中的生成文字、Logo、设备和App画面不属于交付品牌／产品资产。** 原已审内容与真实截图具有更高优先级。精确7条提示词记录于[生成记录](generated-art-prompts.md)。

## 撤下与未选中的历史素材

第十一轮工作台、空白文件夹和日历静物四份WebP派生已撤下；母版留在`../round11-preview/generated-masters/`，历史提示词保留，不表示用户认可。

第十二轮硬件框因操作系统外观与框体比例未选用，母版留在`../round12-preview/generated-masters/`。当前完整App图使用可编辑CSS边框，不声称是真实硬件摄影。旧“不使用任何生成光栅／人物”描述仅反映当时方向，已由本轮用户指令替代。

## 图标许可与竞品边界

历史`application.svg`为本项目原创通用文档几何图；`repayment.svg`的QR字形改编自Phosphor Icons`ph:qr-code-duotone`，本地源`assets/icons/qr-payment-duotone.svg`，©2023 Phosphor Icons，MIT许可见`assets/icons/LICENSE-Phosphor.txt`。竞品截图仅用于研究，留在仓库外参考目录，不打包为线上素材。不使用竞品IP、人物照片、奖项或品牌资源。

## 来源与业务边界

| 来源基线 | SHA256 |
| --- | --- |
| 最新原首页PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |
| 已审泰语catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |

原首页200,000推广、日利率和其他状态图示例金额／时间仍待业务核准；示例标签不能替代核准。未将图内数字提取为官网承诺；还款图QR不是网站付款入口。未配置商店、官方身份或牌照时不制作替代渠道或资质图。

本轮实际渲染、裁切、图片加载及部署结果按[交付说明](delivery.md)和独立证据填写；来源记录本身不等于验收通过。
