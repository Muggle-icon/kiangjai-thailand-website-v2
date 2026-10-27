# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。第十一轮继续以用户指定的 MoneyThunder 首页为主要视觉参照，将 CSS 几何台座替换为原创生成的生活工作静物主视觉和配套功能素材。原 V1 仓库不受影响。

保留 #44E0F8、原 Logo、自托管 Noto Sans Thai、完整真实 App 截图、已审泰语、公开业务配置与静态 HTML/CSS/JS。真实 App 首页独立叠放于透明静物素材之上，文字和按钮保持原生可编辑；设备外宽 PC246px、手机180px。优势区以线上办理为主、还款说明为辅；公司区呈现已审公司事实，安全与政策页保留阅读模板。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 `http://localhost:4173`。无 npm 依赖。修改源组件后重新构建，提交生成的根页面及 `/privacy/`、`/terms/`、`/security/` 别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 品牌首屏、主次产品说明、真实四步流程 |
| `src/pages/home.html` | 公司事实、FAQ、下载和独立安全提醒 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全知识中心及真实政策状态 |
| `src/components/header.html`、`footer.html` | 共享导航、公司、联系及法律信息 |
| `src/components/app-gallery.html`、`dialogs.html`、`assets/app.js` | 原图查看、下载、FAQ、菜单与焦点交互 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens／首屏／共享控件、首页内容、支持页／页脚 |
| `assets/campaign/` | 三幅原创生成静物的透明 WebP 及首屏响应式版本 |
| `assets/illustrations/`、`assets/icons/LICENSE-Phosphor.txt` | 旧功能 SVG 来源保留及共享图标许可 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文和公开业务配置，本轮未改 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界、当前设计 tokens 与扩展元数据 |
| `scripts/build.py`、`.github/workflows/pages.yml` | 组件构建和独立 Pages 发布 |

## 当前状态

`releaseStatus: preview`，noindex。下载显示待开放弹窗；未配置商店链接、下载 QR、官方核验／举报渠道或放贷牌照。法律正文待业务提供。原图内推广、费率及示例状态仍待业务核准，未提取为官网承诺。

第十一轮四页在1440／360／375／390px的16项实页及关键交互检查通过，记录于仓库外 `../round11-preview/qa-review.md`。部署及线上状态以该目录 `release-verification.md` 的实际记录为准。当前实现与验收边界见[交付说明](docs/delivery.md)。视觉与来源见[设计系统](docs/design-system.md)、[素材状态](docs/visual-assets.md)、[生成提示词](docs/generated-art-prompts.md)、[竞品对照](docs/competitor-research.md)。第十轮历史证据仍保留于 `../round10-preview/`，不能代替本轮复测。
