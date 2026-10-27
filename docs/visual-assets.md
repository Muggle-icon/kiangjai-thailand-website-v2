# 第十一轮视觉素材与来源

日期：2026-10-27。本轮使用用户原Logo、完整App PNG及三幅真正生成的原创透明静物素材。生成方式为内置图像生成工具 `builtin-imagegen`；不使用人物照片。网页文字、按钮及真实App原图保持原生独立元素，不生成整屏网站位图。

## 当前映射

| 素材 | 来源／尺寸 | 当前用途 |
| --- | --- | --- |
| `assets/brand/logo-master.png` | 用户原Logo，367×124 | 页头、公司区、页脚；深青底通过CSS呈现白色，未修改PNG |
| `assets/brand/app-icon.png` | 用户原App图标 | 页尾下载；首屏旧旁置签名已移除 |
| `assets/app/home-overview.png` | 用户最新原图，750×1624 | Hero唯一完整产品主图、图库第1张；设备框PC246px／手机180px |
| `assets/app/repayment.png` | 用户原图，750×1624 | 还款工具从图库第2张打开 |
| `assets/app/loan-plan.png` | 用户原图，750×1624 | 步骤03真实确认详情、图库第3张 |
| `assets/app/withdrawal-current.png` | 用户原图，750×1624 | 可提款状态示例，图库第4张，不作到账凭证 |
| `assets/app/home-current.png`、`home.png` | 旧原图，750×1624 | 保留来源，不作当前主展示 |
| `assets/campaign/everyday-counter-{640,1000}.webp` | builtin-imagegen透明PNG母版，响应式WebP派生 | 原创工作生活静物框景，独立真实App图叠在前方；无生成手机或界面 |
| `assets/campaign/online-application.webp` | builtin-imagegen透明PNG母版，WebP派生 | 文件夹、空白纸与笔，解释线上办理主题 |
| `assets/campaign/repayment-planning.webp` | builtin-imagegen透明PNG母版，WebP派生 | 空白日历与收据，辅助还款信息主题；不表示真实日期或计划 |
| `assets/illustrations/application.svg`、`repayment.svg` | 第十轮向量素材 | 历史来源保留，本轮优势区已替换，不再作为当前主素材 |
| `assets/icons/` | 共享功能SVG | FAQ、查看、关闭、下载、箭头和安全提醒 |

所有App截图保留原始比例、数字与内容，未裁切、重绘或遮挡；图库不是可操作App。只有步骤03存在匹配确认页，不把其他状态页配作注册、审批或到账界面。

## 生成素材的母版与记录

原始透明PNG母版保存在仓库外 `../round11-preview/generated-masters/`，生产页面使用优化WebP。完整提示词与生成方式见[生成记录](generated-art-prompts.md)。对应工具输出为：

- 工作生活主图：`exec-e0723421-da52-47ec-af75-365ef76cfe7f.png`。
- 在线办理静物：`exec-faf2e36d-f77d-457e-9a17-2994d51ca429.png`。
- 还款规划静物：`exec-8fec04fb-af13-4ab9-a1c9-20fa84a950b1.png`。

这些素材是概念广告静物，不是客户照片、经营现场、公司实物、审批凭证或真实还款安排。未复制竞品广告素材，也不声称第三方图库授权或真人拍摄来源。WebP仅用于尺寸／格式优化，完整原始App图未经过生成工具处理。

## 保留向量的许可

历史 `application.svg` 为本项目原创通用文档几何图。`repayment.svg` 的 QR 字形改编自 Phosphor Icons `ph:qr-code-duotone`，本地源为 `assets/icons/qr-payment-duotone.svg`；Phosphor Icons版权所有©2023，采用MIT许可，完整许可与清单位于 `assets/icons/LICENSE-Phosphor.txt`。此项许可针对相应向量，不适用于新生成静物。竞品截图只供研究，保存在仓库外参考目录，不进入访客发布包。

## 来源与业务边界

最新首页PNG的SHA256：`4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7`；已审泰语catalog：`d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc`；公开config：`fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179`。本轮来源PNG、catalog及config不变。

原首页200,000泰铢推广、日利率文字及其他状态图内示例金额／时间仍待业务核准。原图与示例标签不替代核准；图内数字未提取为官网额度、费率、时效或优惠承诺。还款截图内QR不是网站付款入口。未配置真实商店、身份或牌照时不制作替代渠道或资质图。

实际渲染、交互与发布状态按[交付说明](delivery.md)及本轮证据核对，来源记录本身不表示测试通过。
