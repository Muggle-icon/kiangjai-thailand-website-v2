# 第十二轮视觉素材与来源

日期：2026-10-27。当前访客页面使用用户原Logo、App图标和完整App PNG，不使用生成光栅素材。第十一轮三幅静物被用户认为不真实、缺乏细节及业务关联，已撤下；本轮生成硬件框实验也未选用。

## 当前映射

| 素材 | 来源／尺寸 | 当前用途 |
| --- | --- | --- |
| `assets/brand/logo-master.png` | 用户原Logo，367×124 | 白色页头及公司区保留深青色，深青页脚CSS呈白色；未改PNG |
| `assets/brand/app-icon.png` | 用户原App图标 | 页尾下载身份 |
| `assets/app/home-overview.png` | 用户最新原图，750×1624 | Hero唯一主图、图库第1张；原生框PC294px／手机186px，图282／178px |
| `assets/app/repayment.png` | 用户原图，750×1624 | 优势区完整辅助图及图库第2张，带示例说明 |
| `assets/app/loan-plan.png` | 用户原图，750×1624 | 步骤03确认详情、图库第3张 |
| `assets/app/withdrawal-current.png` | 用户原图，750×1624 | 图库第4张状态示例，不作到账凭证 |
| `assets/app/home-current.png`、`home.png` | 旧原图，750×1624 | 保留来源，不作当前主展示 |
| `assets/illustrations/application.svg`、`repayment.svg` | 第十轮向量素材 | 历史来源保留，不作当前优势区图 |
| `assets/icons/` | 共享功能SVG | 查看、关闭、下载、箭头、FAQ和安全提醒 |

所有App图保持原比例与原内容，不裁切、重绘、涂改或用生成工具处理。图库不是操作App。仅步骤03有匹配确认页，不把其他状态图配作注册、审批或到账操作。

## 撤下与未选中的生成素材

第十一轮工作生活场景、空白文件夹、空白日历的四份WebP派生已从当前访客素材中移除。原PNG母版留在仓库外 `../round11-preview/generated-masters/`，[原提示词](generated-art-prompts.md)作为历史保留，不代表用户认可。

本轮曾尝试生成仅含硬件的设备框；操作系统外观及框体比例未通过自查，因此未接入最终交付页面。实验母版保存在仓库外 `../round12-preview/generated-masters/`；最终仍使用可编辑CSS边框，不声称真实摄影或硬件材质。生成工具并不保证适合产品展示，未选中实验不能列为交付成果。

## 图标许可与竞品边界

历史 `application.svg` 为本项目原创通用文档几何图；`repayment.svg` 的QR字形改编自Phosphor Icons `ph:qr-code-duotone`，本地源为 `assets/icons/qr-payment-duotone.svg`，©2023 Phosphor Icons，MIT许可见 `assets/icons/LICENSE-Phosphor.txt`。竞品截图只供研究，留在仓库外参考目录，不打包为线上素材。不使用竞品IP、人物、奖项或其他品牌资源。

## 来源与业务边界

| 来源基线 | SHA256 |
| --- | --- |
| 最新原首页PNG | `4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7` |
| 已审泰语catalog | `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc` |
| 公开config | `fc0ab4fd68c9727195d6fbb2a2998ffaa03c95629f3e508898b1d523be57e179` |

原首页200,000推广、日利率及其他状态图示例金额／时间仍待业务核准；示例标签不能替代核准。未将图内数字提取为官网承诺；还款图QR不是网站付款入口。未配置商店、官方身份或牌照时不制作替代渠道或资质图。

实际渲染与发布按[交付说明](delivery.md)及本轮证据核对；来源记录本身不等于验收通过。
