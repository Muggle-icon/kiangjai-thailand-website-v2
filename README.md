# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。第十五轮对照 MONIX 与 MoneyThunder 的 Banner 构图、产品信息容量和阅读层级，统一字重、颜色、形状与图标节奏；保留已审泰语、产品框架、#44E0F8、原 Logo、自托管 Noto Sans Thai 和现有静态组件结构。原 V1 仓库不受影响。

首屏使用 Tony Wu 的曼谷餐食摊实拍（Pexels 16761599），照片贯穿整个 Banner，可编辑文字叠加在深青可读性遮罩上；撤去上一轮左右各半的分割。人物和场景没有生成式修改，不声称其为客户或产品代言人。产品区将在线申请与还款合并为一个双 Tab 演示区，两张原 App 图使用同一组件和相同设备尺寸，取消独立的巨大还款 Banner。四步流程、公司、FAQ、下载和安全提醒各保留独立职责。

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
| `assets/app/`、`assets/brand/`、`assets/icons/` | 完整原始产品图、品牌和共享 SVG／许可证 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文与公开业务配置，本轮保持 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界与当前设计规则 |
| `.github/workflows/pages.yml` | 独立 GitHub Pages 发布 |

## 当前状态与验收

继续 `releaseStatus: preview`、noindex。下载显示真实待开放提示；未增加商店链接、下载 QR、官方身份／举报渠道或放贷牌照。法律正文及原 App 图内推广、费率和示例状态仍待业务核准。

本轮已完成四页×1440／360／375／390px的16组实页检查，并增加首页1024／760px两组，共18组；未发现横向溢出。产品切换及键盘、图片查看器、FAQ、菜单、下载、联系和安全中心返回状态已实测。证据在仓库外`../round15-preview/`，发布事实以其中release-verification.json和线上截图为准；旧轮检查不计作本轮结果。

复用已有 GitHub 技能：Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable 与 UI UX Pro Max；未重复安装同名技能。通过 Better Icons／Iconify 获取 Lucide `maximize-2`，替换图片查看入口原先的加号；FAQ 加号保留展开语义。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[第十五轮比较与整改](docs/round15-review.md)、[素材来源](docs/visual-assets.md)、[生成实验历史](docs/generated-art-prompts.md)。
