# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。第十四轮针对人物真实性、手机展示不统一和排版规则分散进行整改；保留已审泰语、产品框架、#44E0F8、原 Logo、自托管 Noto Sans Thai 与静态组件结构，原 V1 仓库不受影响。

首屏撤下生成小店人物，改用 Sommart Sopon 在曼谷拍摄的真实工作生活照片（Pexels 35764278，拍摄于2022-02-19）。PC为青蓝色文字区域与右侧照片，手机按标题、照片、额度及操作重新排列；没有渐变遮罩。照片仅作情境配图，不代表客户或公司员工。原始 App HOME 与还款截图复用一个构建组件和相同设备尺寸，不再各做一套样机。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 `http://localhost:4173`。无 npm 依赖。编辑源组件后重新构建，提交生成根页面与 `/privacy/`、`/terms/`、`/security/` 路由别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 实拍首屏、完整 App 产品说明、四步申请 |
| `scripts/build.py` | 静态构建及唯一 `APP_SCREENS`／`{{app-screen:…}}` 产品图片组件 |
| `src/pages/home.html`、`security.html`、`privacy.html`、`terms.html` | 首页后续内容、安全中心与政策状态 |
| `src/components/header.html`、`footer.html`、`policy-header.html` | 共享导航、公司联系及法律信息 |
| `src/components/app-gallery.html`、`dialogs.html`、`assets/app.js` | 原图查看、待开放下载、FAQ、菜单与焦点交互 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | 语义 Tokens／共享组件／Hero、首页网格、支持页与页脚 |
| `assets/campaign/` | Pexels 实拍派生的1200px／2000px优化 WebP，无生成图片用于当前首屏 |
| `assets/app/`、`assets/brand/` | 完整原始产品截图和品牌素材 |
| `assets/icons/` | 统一功能 SVG 与许可证 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文与公开业务配置，本轮保持 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界和当前实施规则 |
| `.github/workflows/pages.yml` | 独立 GitHub Pages 发布 |

## 当前状态与验收

继续 `releaseStatus: preview`、noindex。下载显示真实待开放提示；未增加商店链接、下载 QR、官方身份／举报渠道或放贷牌照。法律正文及原 App 图内推广、费率和示例状态仍待业务核准。

第十四轮已保存四页×1440／360／375／390px的16组实际页面截图，布局测量未发现横向溢出。构建、7页静态链接与结构检查、JS语法及核心交互已检查；两张设备和首页／安全中心FAQ的同角色尺寸逐项一致。本轮截图、原始计算值、交互结果及发布证明放在仓库外 `../round14-preview/`，详见本轮整改记录。此前轮次的检查数量不计作本轮结果。

GitHub 上的成熟规则已核验并复用：Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable 与 UI UX Pro Max；本轮没有重复安装同名技能，也不将安装技能等同于通过验收。第十三轮生成图片已撤下，历史提示词与概念仍保留来源记录，不部署。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[本轮整改与技能来源](docs/round14-review.md)、[素材来源](docs/visual-assets.md)、[生成实验历史](docs/generated-art-prompts.md)。
