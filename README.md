# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库`Muggle-icon/kiangjai-thailand-website-v2`。第十八轮针对点击跳动和泰文视觉风格整改：实测MoneyThunder使用Kanit字体族，新增合法自托管Kanit标题／UI，保留Noto Sans Thai正文；修复Tab、展开、弹窗、同页锚点和返回时的位置变化。已审内容、业务、品牌及原图保留，V1不受影响。

产品仍为1120px共享轴、全青蓝背景、左原App／右完整内容组。Tab正文和媒体分别叠在同一网格格子，按真实最长状态保留高度；非激活状态不可见且inert，不再把标题垂直居中或让手机端后续章节上跳。安全中心改横向章节导航和完整内容轴，FAQ／骗局／帮助展开统一SVG与字号。照片和完整原App未改。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 `http://localhost:4173`。无 npm 依赖。编辑源组件后重新构建，提交生成根页面与 `/privacy/`、`/terms/`、`/security/` 路由别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 实拍 Banner、双 Tab 产品说明与完整原图、四步申请 |
| `scripts/build.py` | 静态构建和唯一 `APP_SCREENS`／`{{app-screen:…}}` 图片组件 |
| `src/pages/home.html`、`security.html`、`privacy.html`、`terms.html` | 公司／FAQ／转化、安全中心和真实政策状态 |
| `src/components/header.html`、`footer.html`、`policy-header.html` | 共享导航、公司联系与法律信息 |
| `src/components/app-gallery.html`、`dialogs.html`、`assets/app.js` | 产品 Tab、原图查看、待开放下载、FAQ、菜单和焦点交互 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | 语义 Tokens、Hero、共享控件、首页和支持页布局 |
| `assets/campaign/` | 当前餐食摊实拍的 1200px／2200px 优化 WebP；历史生成图不部署 |
| `assets/app/`、`assets/brand/`、`assets/icons/` | 完整原始产品图、品牌和共享SVG／许可证 |
| `assets/fonts/` | 原Noto Sans Thai正文及Kanit 500／600／700 Thai+Latin六份WOFF2、两组OFL许可 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文与公开业务配置，本轮保持 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界与当前设计规则 |
| `.github/workflows/pages.yml` | 独立 GitHub Pages 发布 |

## 当前状态与验收

继续 `releaseStatus: preview`、noindex。下载显示真实待开放提示；未增加商店链接、下载 QR、官方身份／举报渠道或放贷牌照。法律正文及原 App 图内推广、费率和示例状态仍待业务核准。

第十八轮本地浏览器回归已记录21个页面／宽度场景，均无横向溢出、缺失ARIA目标或可见破图；4组产品状态切换及键盘返回的位置／滚动差为0，8组弹窗打开／关闭差为0，6组展开点击行位移不超过0.25px。14条交互记录涵盖锚点、菜单、返回状态、图库、下载、反馈和字体／隐藏状态。静态构建与发布记录另行核验；线上发布结论以`../round18-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

本轮完成字体、层级和交互稳定性改进，照片保持；这些验收不表示已与竞品达到完整视觉等同。原始本地记录位于仓库外`../../work/round18/`，截图及发布记录位于`../round18-preview/`。

复用已有 GitHub 技能：Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable 与 UI UX Pro Max；未重复安装同名技能。通过 Better Icons／Iconify 获取 Lucide `maximize-2`，替换图片查看入口原先的加号；FAQ 加号保留展开语义。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[第十八轮字体与交互整改](docs/round18-review.md)、[素材来源](docs/visual-assets.md)、[生成实验历史](docs/generated-art-prompts.md)。
