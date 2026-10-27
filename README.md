# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。第十二轮重新检查 MoneyThunder、RabbitCash、LINE BK 的实际页面，撤下用户未认可的第十一轮生成静物。原 V1 仓库不受影响。

当前首屏采用白色信息区与青蓝色产品区，唯一主视觉为用户提供的完整真实 App 首页；设备框为原生 HTML/CSS，不使用生成设备图片或拟真场景。优势区以线上办理说明为主、真实还款图为辅。保留 #44E0F8、原 Logo、自托管 Noto Sans Thai、已审泰语、公开业务配置及静态组件结构。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 `http://localhost:4173`。无 npm 依赖。修改源组件后重新构建，提交生成的根页面及 `/privacy/`、`/terms/`、`/security/` 别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 真实产品首屏、主次产品说明、四步流程 |
| `src/pages/home.html` | 公司事实、FAQ、下载和独立安全提醒 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全知识中心及真实政策状态 |
| `src/components/header.html`、`footer.html` | 共享导航、公司、联系及法律信息 |
| `src/components/app-gallery.html`、`dialogs.html`、`assets/app.js` | 原图查看、下载、FAQ、菜单与焦点交互 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens／首屏／共享控件、首页内容、支持页／页脚 |
| `assets/app/`、`assets/brand/` | 完整原始 App 截图及品牌素材 |
| `assets/illustrations/`、`assets/icons/LICENSE-Phosphor.txt` | 历史功能 SVG 来源及共享图标许可 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文和公开业务配置，本轮未改 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界、当前设计规则与扩展元数据 |
| `scripts/build.py`、`.github/workflows/pages.yml` | 组件构建和独立 Pages 发布 |

## 当前状态

`releaseStatus: preview`，noindex。下载显示待开放弹窗；未配置商店链接、下载 QR、官方核验／举报渠道或放贷牌照。法律正文待业务提供。原图内推广、费率及示例状态仍待业务核准，未提取为官网承诺。

本轮四页在1440／360／375／390px的16项实页及关键交互检查通过，完整结果见仓库外 `../round12-preview/qa-review.md`；部署结果以该目录 `release-verification.md` 为准。第十一轮生成静物虽曾部署，但用户未认可，已经撤下；其历史素材与提示词保留为过程记录，不能称为当前验收成果。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[素材状态](docs/visual-assets.md)、[生成实验记录](docs/generated-art-prompts.md)及[本轮竞品实页对比](docs/round12-competitor-review.md)。
