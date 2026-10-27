# 第十七轮视觉素材与来源

日期：2026-10-27。本轮沿用Tony Wu曼谷餐食摊实拍；照片、原App、Logo和图标均未更换，本轮只调整布局和文字层级，图片及图标文件未改。照片提供生活工作情境，不表示画中人物的国籍、财务状况、借款需求或与公司的关系，不暗示其为 Kiangjai 代言。

## 当前生产素材

| 素材 | 来源／尺寸／大小 | 当前用途 |
| --- | --- | --- |
| `assets/campaign/bangkok-food-stand-2200.webp` | 下述 Pexels 实拍优化派生；2200×1467；433,824B | 桌面贯穿整幅 Hero 的照片 |
| `assets/campaign/bangkok-food-stand-1200.webp` | 同母片派生；1200×800；172,856B | ≤760px Hero，CSS 独立裁切 |
| `assets/brand/logo-master.png` | 用户原 Logo；367×124 | 页头及页脚；公司区不再重复展示，原PNG不改 |
| `assets/brand/app-icon.png` | 用户原App图标 | 保留来源；当前下载区移除，避免推移文字左起点 |
| `assets/app/home-overview.png` | 用户最新原图；750×1624；221,409B | 产品在线申请 Tab、图库第 1 张 |
| `assets/app/repayment.png` | 用户原图；750×1624 | 产品还款 Tab、图库第 2 张 |
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
- 本轮仅缩放和 WebP 压缩；没有 AI 修补或修改人物、衣服、手部和场景。显示裁切及可读性渐隐均为 CSS，未烘焙到照片。原母片在仓库外 `../../work/round15/bangkok-food-stand-original.jpg`。

| 当前派生 | SHA256 |
| --- | --- |
| `bangkok-food-stand-1200.webp` | `158267a0e90abf2a6feca0819fd14ae9ddb2052956e9d2dc756b927c6f32d0f5` |
| `bangkok-food-stand-2200.webp` | `4efa145e8b5b16fba1f8164728ac52343c1aaae29f29e292fa2b054960aa804f` |

## 原 App 与图片查看

`APP_SCREENS` 和 `{{app-screen:…}}` 统一生成 `.app-device > .app-screen`，所有 PNG 保持原像素、完整比例、750×1624 显式尺寸、height:auto。原App移到桌面产品左侧，右侧为完整内容组；手机先内容后原图。两张产品图配对切换，每个断点同宽：240px／手机 210px，4px 内边、28／26px 角及统一阴影。两个原图弹窗共用 `min(320px,calc((100dvh - 280px)*.46182266),100%)`，不另做硬件。

仅步骤 03 有匹配确认页，不将其他图伪装成注册、审批、到账操作。图库不是操作 App，账单 QR 不是网站支付入口。图内推广、费率和示例状态未变更，仍待业务核准。

## 图标出处

第十五轮通过 Better Icons／Iconify 获取 [Lucide `maximize-2`](https://icon-sets.iconify.design/lucide/maximize-2/)，保存为 `assets/icons/maximize.svg`；数据来源 `https://api.iconify.design/lucide/maximize-2.svg`。它表示查看大图；FAQ 加号继续只表示展开，方向箭头用于实际前后切换／安全页导航。

Lucide [许可](https://lucide.dev/license)及本地 `assets/icons/LICENSE-Lucide.txt` 保留 ISC 文本和相关 Feather MIT 文本。历史 Phosphor 图标来源／MIT 文本保留于 `LICENSE-Phosphor.txt`。历史 application.svg 为项目原创文档几何图；repayment.svg 的 QR 字形源自 Phosphor。图标许可不等于竞品品牌资源许可。

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

原图 200,000 推广、日利率及示例金额／时效仍待业务核准，未提取为官网承诺。未配置的商店、官方渠道或牌照不制作替代图。第十七轮已完成18组实际页面（四页×1440／360／375／390px，另加首页1024／760px），无横向溢出或可见破图；4组配对设备规格、所有aria-controls目标及17项运行记录已检查，7页静态检查、JS语法和差异检查通过。catalog／config／原HOME的SHA保持基线。当前证据在`../round17-preview/`；线上发布结论以`../round17-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。
