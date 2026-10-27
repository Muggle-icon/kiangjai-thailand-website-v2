# 第十四轮视觉素材与来源

日期：2026-10-27。本轮撤下第十三轮的生成生活场景，首屏改用有摄影师署名、拍摄地点和日期的实拍照片。人物只用于日常工作情境说明；不表示其国籍、职业身份、财务状况、借款经历或与本公司的关系，不暗示人物为产品代言。

## 当前生产素材

| 素材 | 来源／尺寸／文件大小 | 当前用途 |
| --- | --- | --- |
| `assets/campaign/bangkok-workday-2000.webp` | 下述 Pexels 实拍母片的优化派生；2000×1333；181,664B | PC Hero；文字、品牌色面和按钮由 HTML/CSS 实现，无渐隐遮罩 |
| `assets/campaign/bangkok-workday-1200.webp` | 同一母片的优化派生；1200×800；83,408B | ≤760px Hero 图；CSS 单独设置照片高度和焦点 |
| `assets/brand/logo-master.png` | 用户原 Logo；367×124 | 页头、公司区和页脚；原 PNG 未改，深色页脚使用 CSS 白色显示 |
| `assets/brand/app-icon.png` | 用户原 App 图标 | 下载区产品身份 |
| `assets/app/home-overview.png` | 用户最新原图；750×1624；221,409B | 产品介绍主图、图库第 1 张 |
| `assets/app/repayment.png` | 用户原图；750×1624 | 还款说明及图库第 2 张 |
| `assets/app/loan-plan.png` | 用户原图；750×1624 | 步骤 03 详情和图库第 3 张 |
| `assets/app/withdrawal-current.png` | 用户原图；750×1624 | 图库第 4 张状态示例，不作到账凭证 |
| `assets/app/home-current.png`、`home.png` | 旧原图；750×1624 | 保留来源，不作当前主展示 |
| `assets/icons/` | 共享功能 SVG | 下载、关闭、查看、FAQ、导航和安全提醒 |
| `assets/illustrations/application.svg`、`repayment.svg` | 历史向量素材 | 来源保留，不作当前优势区主图 |

原始 App 图均保持完整比例和内容，不裁切、重绘、涂改或用生成工具处理。图库不是可操作 App。仅步骤 03 有匹配确认页，不把其他状态图包装成注册、审批或到账操作。

## 实拍照片出处与使用边界

- 摄影师：**Sommart Sopon**；Pexels 作品 ID：**35764278**。
- [作品与原始元数据](https://www.pexels.com/photo/professional-working-remotely-in-bangkok-cafe-35764278/)：原图 6000×4000，地点 Bangkok, Bangkok, Thailand；`Taken At` 为 **2022-02-19**。页面另列的 `Date` 不是本项目采用的拍摄日期。
- [Pexels 许可](https://www.pexels.com/license/)允许在网站和营销材料使用、修改照片；不要求署名，但本项目保留摄影师与出处。不得暗示画中人物或品牌为产品代言，不得以冒犯或贬损方式描述可识别人物。
- 首屏保留 `ภาพประกอบ`（配图）说明。照片不构成真实客户、公司员工、公司办公地点、贷款结果或服务资质证明。来源地点只能支持“曼谷拍摄的工作情境”，不能据此推定人物国籍或产品用户身份。
- 本轮仅进行尺寸缩放与 WebP 压缩，人物、衣服、肢体和场景未通过生成工具修改；网页的显示裁切由 `object-fit`／`object-position` 控制。
- 下载母片保存在仓库外 `../../work/round14/bangkok-cafe-original.jpg`；生产包仅包含上表两份优化 WebP。

| 生产照片派生 | SHA256 |
| --- | --- |
| `bangkok-workday-1200.webp` | `f8a2c07bb86695e5bdd397fcf2fbfa2d7c2613f1fc14522b0e406834e6927b55` |
| `bangkok-workday-2000.webp` | `8768cf93896fcc0385517910692b2445f7a37f1c6dbbca4c7f6071e12ff8cb46` |

## 产品图的统一组件

`scripts/build.py` 的 `APP_SCREENS` 和 `{{app-screen:…}}` 统一生成 `.app-device > .app-screen`，首页 HOME、还款图、步骤详情和图库均复用这一结构。图片显式声明 `750×1624`、`height:auto`、`loading="lazy"` 和 `decoding="async"`。

内联设备统一使用 `--app-width:240px`；≤760px 为 `210px`。框体为深青、4px 内边，圆角 PC 28px／手机 26px，阴影统一为 `--shadow-device`；同页两张产品图不再分别设置宽度。弹窗使用同一组件及一个独立的视口适配规则 `--app-dialog-width:min(320px,calc((100dvh - 280px)*.46182266),100%)`，不是另造一套设备样式。

## 撤下与未选中的历史素材

- 第十三轮 `neighborhood-shop-1862.webp`、`neighborhood-shop-1400.webp` 已从生产素材撤下；其生成母版留在仓库外 `../round13-preview/generated-masters/bangkok-shop-life.png`，不再作为当前首屏。
- 同目录六幅 `concept-*.png` 仅是第十三轮设计过程参考，不部署；其中生成文字、Logo、设备和 App UI 从未成为交付品牌／产品资产。历史提示词仍见 [生成记录](generated-art-prompts.md)。
- 第十一轮工作台、空白文件夹和日历静物的 WebP 派生已撤下，母版在 `../round11-preview/generated-masters/`。
- 第十二轮硬件框因操作系统外观与比例不适用而未采用，母版在 `../round12-preview/generated-masters/`。当前 App 图使用可编辑 CSS 框体，不声称为真实硬件摄影。

## 图标许可与竞品边界

当前功能 SVG 的许可证见 `assets/icons/LICENSE-Lucide.txt` 与 `LICENSE-Phosphor.txt`。历史 `application.svg` 为本项目原创通用文档几何图；`repayment.svg` 的 QR 字形改编自 Phosphor Icons `ph:qr-code-duotone`，©2023 Phosphor Icons，MIT 许可。

竞品截图仅用于比较，留在仓库外参考目录，不打包为线上素材。不挪用竞品照片、人物、Logo、奖项或产品 UI。借鉴其场景构图和信息层级不等于获得其素材使用权，也不构成沿用其业务承诺的依据。

## 原素材与业务边界

| 来源基线 | SHA256 |
| --- | --- |
| 最新原首页 PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |
| 已审泰语 catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开 config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |

原首页内的 200,000 推广、日利率和其他状态图的示例金额／时间仍待业务核准；示例标签不能替代核准。这些数字未提取为官网承诺；还款图 QR 不是网站付款入口。未配置商店、官方身份或牌照时不制作替代渠道或资质图。

本文记录来源与源码映射。第十四轮已完成四页×四宽度实页截图、Hero 裁切和产品图实际尺寸检查，见 [整改与验收记录](round14-review.md) 及仓库外 `../round14-preview/`；线上版本证明另见交付记录。素材来源本身不替代页面验收。
