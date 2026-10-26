# เคียงใจ Thailand website v2

Kiangjai泰国官网V2独立项目，当前为第八轮。沿用静态HTML/CSS/JS与Python组件构建器，保留#44E0F8、原Logo、已审泰语及业务配置。旧仓库不受影响，历史设计与验收通过Git版本查看。

本轮保留居中品牌Hero和按钮体系，修正产品图用途：用户最新完整首页原样保存为 `assets/app/home-overview.png`，用于首个产品主面及图库首图；贷款计划页仅用于步骤03确认详情和图库第3张，不再代表首页。扫码还款仍为次产品面，银行到账只保留已审文字事实，撤除装饰示意图。

产品区增加两条低权重帮助链接，精确复用原FAQ的服务范围F01和费用F04问题。点击只展开、定位并聚焦既有问答，不添加条件、费率或流程，原七条FAQ单开逻辑保留。四图图库顺序为首页／还款／贷款计划／可提款首页。

所有人物及场景照片继续禁用。首页保持750×1624原图，不因图内费率或推广冲突而隐藏，也不裁切、涂改或将其转成官网正文承诺。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 http://localhost:4173 。无需npm安装；字体、图标、图片和二维码库均在本地。编辑源组件后重新构建，根HTML与 `/privacy/`、`/terms/`、`/security/` 别名一并输出。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html` | 品牌字体封面、额度与主下载动作 |
| `src/components/benefits.html` | 真实首页主面、还款次面、到账事实及F01／F04帮助链接 |
| `src/components/application-steps.html` | 四步原文与步骤03真实确认图详情 |
| `src/components/app-gallery.html` | 首页／还款／贷款计划／可提款首页图库 |
| `src/pages/home.html`、`security.html`、`privacy.html`、`terms.html` | 首页与支持页 |
| `src/components/` | 共享导航、FAQ、弹窗与页脚 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文与公开业务配置 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens、首页及支持页样式 |
| `assets/app.js` | 导航、FAQ定向展开、图库、下载与弹窗 |
| `scripts/build.py`、`.github/workflows/pages.yml` | 构建及独立Pages发布 |

主CTA桌面224×52px、手机满宽52px；PC页头描边下载144×44px，手机只保留Logo和菜单。Pages只发布网页及访客资源，不发布源组件和内部文档。

## 当前状态

`releaseStatus: preview`，noindex；真实商店未开放，下载只显示待开放弹窗，不外跳、不生成下载二维码、不收集资料。政策、官方身份／核验和举报渠道仍待业务确认。

第八轮已完成1440／360／375／390实页、图片／图库映射、定向FAQ、菜单、下载及步骤03检查，构建／JS和7份HTML静态检查通过；独立复审的唯一焦点问题已修复。线上发布另做实际核验。见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[素材状态](docs/visual-assets.md)及[泰国竞品研究与落地](docs/competitor-research.md)。
