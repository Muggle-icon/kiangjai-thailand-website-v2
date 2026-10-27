# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。第十轮以用户指定的 MoneyThunder 首页为主要视觉参照，落实统一青色产品封面、功能图形、紧凑四步流程、深青公司区与青色下载区。原 V1 仓库不受影响。

保留 #44E0F8、原 Logo、自托管 Noto Sans Thai、完整真实 App 截图、已审泰语、公开业务配置与静态 HTML/CSS/JS。首页只有一张完整 App 主图：PC 250px、手机 236px，由原生 HTML/CSS 硬边背板与台座承载。优势区以线上办理为主、扫码还款为辅；安全与政策页继续采用目录和阅读模板。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 `http://localhost:4173`。无 npm 依赖。修改源组件后重新构建，提交生成的根页面及 `/privacy/`、`/terms/`、`/security/` 别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 一体化首屏、功能图形、真实四步流程 |
| `src/pages/home.html` | 公司身份、FAQ、下载和独立安全提醒 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全知识中心及真实政策状态 |
| `src/components/header.html`、`footer.html` | 共享导航、公司、联系及法律信息 |
| `src/components/app-gallery.html`、`dialogs.html`、`assets/app.js` | 原图查看、下载、FAQ、菜单与焦点交互 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens／首屏／共享控件、首页内容、支持页／页脚 |
| `assets/illustrations/`、`assets/icons/LICENSE-Phosphor.txt` | 可编辑功能 SVG 与相关许可 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文和公开业务配置，本轮未改 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界、当前设计 tokens 与扩展元数据 |
| `scripts/build.py`、`.github/workflows/pages.yml` | 组件构建和独立 Pages 发布 |

## 当前状态

`releaseStatus: preview`，noindex。下载显示待开放弹窗；未配置商店链接、下载 QR、官方核验／举报渠道或放贷牌照。法律正文待业务提供。原图内推广、费率及示例状态仍待业务核准，未提取为官网承诺。

第十轮四页 1440／360／375／390px 实页、交互、构建与静态检查已完成，独立像素复查结论为可交付用户查看。Pages 部署结果与线上版本核对统一记在仓库外 `../round10-preview/release-verification.md`；本文不预先声明线上成功。当前范围见[交付说明](docs/delivery.md)，视觉规范及来源见[设计系统](docs/design-system.md)、[素材状态](docs/visual-assets.md)、[竞品对照](docs/competitor-research.md)。截图位于仓库外 `../round10-preview/`，不进入发布包。
