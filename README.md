# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。本轮针对多重容器、左起点不齐及页脚断层，参照MoneyThunder的全宽章节与连续页脚重整布局。已审泰语、产品框架、品牌、照片、JS交互均保留；原V1不受影响。

首页背景均铺满视口，只有一个最大1240px shell和48／24／20px边距。Hero全宽无外白边／圆角，文字直接复用shell；产品去掉内嵌padding并采用6+6列；公司和FAQ标题置于完整内容上方；下载文字和下方CTA左对齐；安全提醒和页脚连续深青，页脚品牌整行后公司／联系两列，手机单列，无竖线或额外横向缩进。 照片仍为Tony Wu的曼谷餐食摊实拍，未修改人物，非客户或产品代言证明。

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

第十六轮已完成18组实际布局：四页×1440／360／375／390px，加首页1024／760px，无横向溢出或可见破图。6种首页布局的9个全宽背景、23个主要左起点以及4种必检宽度的两种Tab设备规格均已测量；交互回归、7页静态检查和JS语法已完成。证据目录为仓库外`../round16-preview/`；线上发布结论以`../round16-preview/release-verification.json`中的commit、CI与实际浏览器记录为准；本文件记录本地验收。

复用已有 GitHub 技能：Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable 与 UI UX Pro Max；未重复安装同名技能。通过 Better Icons／Iconify 获取 Lucide `maximize-2`，替换图片查看入口原先的加号；FAQ 加号保留展开语义。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[第十六轮比较与整改](docs/round16-review.md)、[素材来源](docs/visual-assets.md)、[生成实验历史](docs/generated-art-prompts.md)。
