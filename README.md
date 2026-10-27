# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。第十三轮按用户最新要求，对标 MONIX、FINNIX、MoneyThunder 和 Promise 的生活场景构图、产品解释及支持信息层级，重新设计首页、共享导航／控件／页脚、安全中心与政策页。原 V1 仓库不受影响。

首屏改为一幅完整的曼谷社区小店生活场景，PC 使用照片与可编辑文字叠加，手机使用深青文字区与下方照片。**场景由图像生成工具制作，是品牌情境插图，不是真实客户、门店、员工或公司地点的证明。** 用户提供的完整 App 首页移至产品介绍，承担真实产品解释；还款图为辅助说明。已审泰语、产品框架、#44E0F8、原 Logo、自托管 Noto Sans Thai 和原生静态组件结构保留。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 `http://localhost:4173`。无 npm 依赖。修改源组件后重新构建，提交生成的根页面及 `/privacy/`、`/terms/`、`/security/` 别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 生活场景首屏、真实 App 产品解释、四步申请 |
| `src/pages/home.html` | 公司事实、FAQ、下载和独立安全提醒 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全知识中心及真实政策状态 |
| `src/components/header.html`、`footer.html`、`policy-header.html` | 共享导航、公司、联系及法律信息 |
| `src/components/app-gallery.html`、`dialogs.html`、`assets/app.js` | 原图查看、下载、FAQ、菜单与焦点交互 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens／页头／Hero／共享控件、首页内容、支持页／页脚 |
| `assets/campaign/` | 本轮生成生活场景的优化 WebP，仅这一组生成图片用于访客页面 |
| `assets/app/`、`assets/brand/` | 完整原始 App 截图及原品牌素材 |
| `assets/illustrations/`、`assets/icons/LICENSE-Phosphor.txt` | 历史功能 SVG 来源及共享图标许可 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文和公开业务配置，本轮保留 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界、当前设计规则与扩展元数据 |
| `scripts/build.py`、`.github/workflows/pages.yml` | 组件构建和独立 Pages 发布 |

## 当前状态与验收

`releaseStatus: preview`，noindex。下载显示待开放弹窗；未配置商店链接、下载 QR、官方核验／举报渠道或放贷牌照。法律正文待业务提供。原 App 图内推广、费率及示例状态仍待业务核准，未提取为官网承诺。

本轮已完成四页×1440／360／375／390px共16种实页检查、完整App比例检查、17项交互记录及构建／语法／静态资源检查。无横向溢出或可见按钮越界；独立视觉复查提出的还款图偏小已修正。截图、前后对照及QA位于仓库外 `../round13-preview/`，发布结果以其中 `release-verification.md` 为准。

六幅生成的分区设计概念仅用于实施参考，其中的文字、Logo、设备与 App UI 不属于交付素材；网页全部使用可维护的 HTML/CSS/JS，产品图使用用户原图。此前否决的生成静物和硬件实验继续作为历史记录保留。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[素材状态](docs/visual-assets.md)、[生成提示词及历史记录](docs/generated-art-prompts.md)、[本轮竞品比较](docs/round13-competitor-review.md)。
