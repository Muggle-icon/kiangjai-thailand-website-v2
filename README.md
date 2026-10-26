# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`。第九轮重新对照 FINNIX、LINE BK、MoneyThunder 官方产品及支持页面，重做首页、安全中心、隐私与服务条款页的布局，原 V1 仓库不受影响。

首页将产品定位、最高50,000泰铢额度、下载与一张完整真实 App 首页组成同一首屏；撤除双手机卡片。优势集中解释线上办理及还款，到账只在四步申请中说明；公司身份、FAQ和安全内容各有独立职责。安全中心采用目录和阅读区，政策页明确保留待发布状态。

保留 #44E0F8、原Logo、自托管 Noto Sans Thai、已审泰语、公开业务配置与静态 HTML/CSS/JS。没有人物照片、虚构产品界面、下载链接或新增贷款承诺。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 http://localhost:4173 。无npm依赖。修改源组件后重新构建，提交生成的根页面及 `/privacy/`、`/terms/`、`/security/` 别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 一体化首屏、主次优势、真实四步流程 |
| `src/pages/home.html` | 公司身份、FAQ、下载和独立安全提醒 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全知识中心及真实政策状态 |
| `src/components/header.html`、`footer.html` | 共享导航与公司、联系、法律信息 |
| `src/components/app-gallery.html`、`dialogs.html` | 完整原图及原生弹窗 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens、首屏/共享控件、首页内容、支持页 |
| `assets/app.js` | 菜单、FAQ、图库、下载与焦点交互 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文和公开业务配置，均未改 |
| `scripts/build.py`、`.github/workflows/pages.yml` | 组件构建和独立Pages发布 |

## 当前边界

`releaseStatus: preview`，noindex。商店未开放，下载入口显示待开放弹窗，不外跳、不生成下载QR、不收集资料。法律正文、有效牌照和官方核验/举报渠道仍待业务提供。完整App原图内的费率及推广冲突仍需业务核准，未提取为正文宣称。

四页分别检查1440／360／375／390实页，交互及静态检查记录见[交付说明](docs/delivery.md)。设计依据、素材映射见[竞品对照](docs/competitor-research.md)、[设计系统](docs/design-system.md)、[素材状态](docs/visual-assets.md)。截图保存在仓库外 `../round9-preview/`，不进入发布包。
