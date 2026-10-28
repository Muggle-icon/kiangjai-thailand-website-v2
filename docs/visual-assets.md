# 第二十一轮视觉素材与来源

日期：2026-10-28。本轮沿用Tony Wu曼谷餐食摊实拍、完整App、Logo、原App图标、SVG和原Kanit／Noto文件；没有新增或替换图片／字体。改的是整幅摄影构图、两个独立产品章、公司和品牌收束的实际排版，不以新照片代替结构设计。照片不推定国籍、财务状态、借款需求、客户／员工关系或代言。

## 当前生产素材

| 素材 | 来源／尺寸／大小 | 当前用途 |
| --- | --- | --- |
| `assets/campaign/bangkok-food-stand-2200.webp` | 下述 Pexels 实拍优化派生；2200×1467；433,824B | PC整幅生活场景Hero，CSS放大1.38 |
| `assets/campaign/bangkok-food-stand-1200.webp` | 同母片派生；1200×800；172,856B | ≤760px Hero，CSS独立裁切／放大1.75 |
| `assets/brand/logo-master.png` | 用户原 Logo；367×124 | 页头原品牌；close用原App图标，公司事实不重复Logo，原PNG不改 |
| `assets/brand/app-icon.png` | 用户原App图标 | 深青close的App身份，PC80×80／手机64×64，与下载标题一组 |
| `assets/app/home-overview.png` | 用户最新原图；750×1624；221,409B | 独立白色线上story的右图；紧凑线上Tab；图库第1张 |
| `assets/app/repayment.png` | 用户原图；750×1624 | 独立深青还款story的右图；紧凑还款Tab；图库第2张 |
| `assets/app/loan-plan.png` | 用户原图；750×1624 | 步骤 03 详情、图库第 3 张 |
| `assets/app/withdrawal-current.png` | 用户原图；750×1624 | 图库第 4 张示例，不作到账证据 |
| `assets/app/home-current.png`、`home.png` | 历史用户原图 | 留来源，不作当前主展示 |
| `assets/icons/maximize.svg` | Lucide `maximize-2`，24×24 viewBox | 三处图片查看入口，取代原 FAQ 式加号 |
| 其他 `assets/icons/` | 已有共享 SVG 和许可证 | 导航、下载、关闭、FAQ 与安全功能 |

## 摄影来源和使用边界

- 摄影师：**Tony Wu**；作品 ID：**16761599**；[作品页](https://www.pexels.com/photo/woman-working-on-food-stand-16761599/)标记地点为 Bangkok, Bangkok, Thailand。
- 上传日：**2023-05-10**。**拍摄日期未核验**，不得把上传日写成拍摄日。
- [Pexels 许可](https://www.pexels.com/license/)允许网站和营销使用、修改照片；无强制署名要求，本项目仍保留摄影师／出处。不得暗示画中人物或品牌为产品代言，不得贬损或冒犯可识别人物。
- 首屏保留 `ภาพประกอบ` 配图说明；照片不证明真实客户、公司员工、借贷结果、服务资质或公司地点，也不推定人物的国籍／财务状态。
- 两份WebP沿用既有缩放／压缩文件，本轮字节不变；没有AI修补或修改人物、衣服、手部和场景。PC CSSscale1.38／origin76%46%／position74%44%，手机scale1.75／origin71%43%／position64%43%；saturate.9及深青可读性渐隐均为CSS，未烘焙进照片。原母片在仓库外`../../work/round15/bangkok-food-stand-original.jpg`。

| 当前派生 | SHA256 |
| --- | --- |
| `bangkok-food-stand-1200.webp` | `158267a0e90abf2a6feca0819fd14ae9ddb2052956e9d2dc756b927c6f32d0f5` |
| `bangkok-food-stand-2200.webp` | `4efa145e8b5b16fba1f8164728ac52343c1aaae29f29e292fa2b054960aa804f` |

## 原 App 与图片查看

`APP_SCREENS` 和 `{{app-screen:…}}` 统一生成 `.app-device > .app-screen`，所有 PNG 保持原像素、完整比例、750×1624 显式尺寸、height:auto。>1100px为两个独立全宽story，各自左说明／右一张完整原图，同一媒体轴；白线上、深青还款，没有双机拼贴／浅青共用底。≤1100px成对Tab切换整个story及其panel／media，≤760px用subgrid对齐摘要→完整原图，再接始终可见support。图注14px／24px、查看14px／min44px，两种状态均保留共享费用提醒／申请／FAQ入口。两张每个断点同宽：240px／手机210px、4px内边、28／26px角及统一阴影。两个原图弹窗共用 `min(320px,calc((100dvh - 280px)*.46182266),100%)`，不另做硬件。

仅步骤 03 有匹配确认页，不将其他图伪装成注册、审批、到账操作。图库不是操作 App，账单 QR 不是网站支付入口。图内推广、费率和示例状态未变更，仍待业务核准。

## 图标出处

第十五轮通过 Better Icons／Iconify 获取 [Lucide `maximize-2`](https://icon-sets.iconify.design/lucide/maximize-2/)，保存为 `assets/icons/maximize.svg`；数据来源 `https://api.iconify.design/lucide/maximize-2.svg`。它表示查看大图；FAQ 加号继续只表示展开，方向箭头用于实际前后切换／安全页导航。

Lucide [许可](https://lucide.dev/license)及本地 `assets/icons/LICENSE-Lucide.txt` 保留 ISC 文本和相关 Feather MIT 文本。历史 Phosphor 图标来源／MIT 文本保留于 `LICENSE-Phosphor.txt`。历史 application.svg 为项目原创文档几何图；repayment.svg 的 QR 字形源自 Phosphor。图标许可不等于竞品品牌资源许可。

## 既有字体来源

当前正文继续原自托管Noto Sans Thai；Kanit用于标题／UI，沿用第十八轮已获取的文件，本轮未新增字体。竞品[实际font-family记录](../../round18-preview/competitors/moneythunder-type-metrics.json)含orig_kanit_semibold／medium／regular，本项目未下载竞品字体文件，而是单独从Google Fonts获取授权文件。

- [Google Fonts CSS来源](https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;700&display=swap)，各WOFF2的gstatic直链和SHA见[完整来源记录](../../round18-preview/kanit-font-sources.json)。
- [Google Fonts Kanit OFL原文](https://github.com/google/fonts/blob/main/ofl/kanit/OFL.txt)，本地`assets/fonts/Kanit-OFL.txt`；©2020 The Kanit Project Authors，SIL Open Font License1.1。原Noto许可仍保留在OFL-NotoSansThai.txt。

| 文件 | 字重／子集 | 大小 |
| --- | --- | --- |
| Kanit-500-thai.woff2 | 500／Thai | 13,288B |
| Kanit-500-latin.woff2 | 500／Latin | 19,236B |
| Kanit-600-thai.woff2 | 600／Thai | 13,784B |
| Kanit-600-latin.woff2 | 600／Latin | 19,496B |
| Kanit-700-thai.woff2 | 700／Thai | 13,488B |
| Kanit-700-latin.woff2 | 700／Latin | 19,276B |

六文件总98,568B，已对照来源JSON检查大小及SHA。@font-face使用unicode-range、font-display:swap；预加载500／600 Thai。访客字体均从自身站点加载，来源URL仅用于出处，不引入运行时Google字体请求。

## 被替代的历史来源

- 第十四轮 Sommart Sopon 的 [Pexels 35764278 咖啡馆照片](https://www.pexels.com/photo/professional-working-remotely-in-bangkok-cafe-35764278/)不再用于当前 Hero。其来源曾标记曼谷、拍摄日 2022-02-19；`bangkok-workday-1200.webp`／`2000.webp` 属上一轮派生，当前页面及生产派生均已撤下。母片保留在 `../../work/round14/bangkok-cafe-original.jpg`。
- 第十三轮 `neighborhood-shop-1400.webp`／`1862.webp` 生成店铺图已撤下；母版和六幅概念留在仓库外 `../round13-preview/generated-masters/`，不部署。概念中的生成文字、Logo、硬件或 App UI 从未替代原始产品资料。
- 第十一轮生成静物和第十二轮硬件实验均为历史否决素材。精确历史提示词继续见 [generated-art-prompts.md](generated-art-prompts.md)，不因保存记录而恢复为当前设计要求。
- MONIX／MoneyThunder 等竞品截图只作研究，保存在仓库外。不使用其照片、人物、Logo、奖项或业务承诺。

## 内容与验收边界

| 保留原基线 | SHA256 |
| --- | --- |
| 最新 HOME PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |
| 已审 Thai catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开 config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |

原图 200,000 推广、日利率及示例金额／时效仍待业务核准，未提取为官网承诺。未配置的商店、官方渠道或牌照不制作替代图。本轮最终记录21／4／8／2／10；完整App／照片／字体／数据SHA保持、原图比例正确，静态7页检查及浏览器零warn／error通过。21场景及canonical截图在断点焦点修复后全部重跑／重截。独立截图／源码审查仅在所给PC／默认移动视觉范围给出ship，未验证所有交互／实机／数值对比度或公开部署。图片、字体和许可字节保持；当前截图在`../round21-preview/`；线上发布结论以`../round21-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

本轮使用[MoneyThunder官网](https://www.money-thunder.com/)新鲜PC整页[参考](../../round21-preview/competitors/moneythunder-1440.png)与[区域指标](../../round21-preview/competitors/regions.json)，仅作构图／层级研究。当前轮播是推荐活动；不把其照片／品牌／金融或资质主张拿来生产使用，也不称为新的有效手机样本。此前三站字体指标属于历史出处研究，Money390桌面裁切限制仍成立；本站继续原SIL OFL字体。生成提示词与旧轮审查原文保留。
